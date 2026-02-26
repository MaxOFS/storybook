import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

export interface BarChartData {
  label: string;
  value: number;
}

@Component({
  selector: 'app-bar-chart',
  template: `<div class="bar-chart-container"></div>`,
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() data: BarChartData[] = [];
  @Input() width: number = 600;
  @Input() height: number = 400;
  @Input() margin = { top: 20, right: 30, bottom: 40, left: 40 };
  @Input() color: string = '#69b3a2';

  private svg: any;
  private chartWidth!: number;
  private chartHeight!: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.createSvg();
    this.drawChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.svg && changes['data']) {
      this.updateChart();
    }
  }

  private createSvg(): void {
    this.chartWidth = this.width - this.margin.left - this.margin.right;
    this.chartHeight = this.height - this.margin.top - this.margin.bottom;

    const container = d3.select(this.elementRef.nativeElement)
      .select('.bar-chart-container');

    // Supprimer l'ancien SVG s'il existe
    container.select('svg').remove();

    this.svg = container
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }

  private drawChart(): void {
    if (!this.data || this.data.length === 0) {
      return;
    }

    // Échelles
    const xScale = d3.scaleBand()
      .domain(this.data.map(d => d.label))
      .range([0, this.chartWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.value) || 0])
      .range([this.chartHeight, 0]);

    // Axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Axe X
    this.svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${this.chartHeight})`)
      .call(xAxis);

    // Axe Y
    this.svg.append('g')
      .attr('class', 'y-axis')
      .call(yAxis);

    // Barres
    this.svg.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: BarChartData) => xScale(d.label) || 0)
      .attr('width', xScale.bandwidth())
      .attr('y', (d: BarChartData) => yScale(d.value))
      .attr('height', (d: BarChartData) => this.chartHeight - yScale(d.value))
      .attr('fill', this.color)
      .on('mouseover', (event: any, d: BarChartData) => {
        d3.select(event.currentTarget).attr('opacity', 0.7);
        
        // Tooltip simple
        const tooltip = d3.select('body')
          .append('div')
          .attr('class', 'tooltip')
          .style('opacity', 0)
          .style('position', 'absolute')
          .style('background', 'rgba(0, 0, 0, 0.8)')
          .style('color', 'white')
          .style('padding', '8px')
          .style('border-radius', '4px')
          .style('font-size', '12px');

        tooltip.transition()
          .duration(200)
          .style('opacity', .9);
        
        tooltip.html(`${d.label}: ${d.value}`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', (event: any, d: BarChartData) => {
        d3.select(event.currentTarget).attr('opacity', 1);
        d3.selectAll('.tooltip').remove();
      });
  }

  private updateChart(): void {
    if (!this.svg) return;

    // Supprimer les anciens éléments
    this.svg.selectAll('*').remove();
    
    // Redessiner le graphique
    this.drawChart();
  }
}