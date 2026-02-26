import { 
  Component, 
  ElementRef, 
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  ViewChild,
  SimpleChanges
} from '@angular/core'

import * as dynvis from '@fso-datavis/dynvis';

@Component({
  selector: 'app-dynvis-wrapper',
  template: '<div #container class="dynvis-container"></div>',
  styles: [`
  .dynvis-container {
    width: 100%;
    height: 100%;
  }
  `]
})
export class DynvisComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('container', {static: true}) container!: ElementRef;

  @Input() chartType: string = 'barChart';
  @Input() configOptions: any = {};
  @Input() styleOptions: any = {};

  private chartInstance: any;

  ngOnInit() {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['chartType']?.firstChange) {
      this.destroyChart();
      this.renderChart();
    } else if (this.chartInstance && this.chartInstance.update) {
      this.chartInstance.update(this.configOptions, this.styleOptions)
    }
  }

  ngOnDestroy() {
    this.destroyChart();
  }

  private renderChart() {
    if (typeof dynvis === 'undefined') {
      console.error('dynvis is not loaded')
      return;
    }

    this.container.nativeElement.innerHTML = '';
    console.log(this)
    console.log('This is the the chart Type :', this.chartType)
    const method = `${this.chartType}`;
    
    if (typeof dynvis[method] === 'function'){

      const ds = dynvis.dataSource({
        type: 'tsv',
        src: 'data.tsv'
      })
      const chart = dynvis[method](
        this.configOptions,
        this.styleOptions
      );
      const layout = dynvis.layout(
        document.getElementById('container'),
        {
          boxes: [
            ['chart', chart]
          ],
          dataSources: {
            main: ds
          }
        }
      )
      layout.render()
    } else {
      console.error(`dynvis.${method} is not a function`)
    }
  }

  private destroyChart() {
    if (this.chartInstance && typeof this.chartInstance.destroy === 'function') {
      this.chartInstance.destroy();
    }
    this.container.nativeElement.innerHTML = '';
  }
}