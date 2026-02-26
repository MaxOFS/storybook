// bfs-visualization.component.ts
import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

declare global {
  interface Window {
    dynvis?: {
      init?: () => void;
      destroy?: (element: HTMLElement) => void;
    };
  }
}

@Component({
  selector: 'app-bfs-visualization',
  template: `
    <div #vizContainer
         class="fso-datavis-widget"
         [attr.data-vizid]="vizId"
         [attr.data-lang]="language">
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class DynvisComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() vizId: string = 'gd-01.05.05.01-su';
  @Input() lang: 'f' | 'd' | 'i' | 'e' = 'f'; // French, German, Italian, English
  @Input() scriptVersion: string = 'v0.9';
  
  @ViewChild('vizContainer', { static: true }) vizContainer!: ElementRef;
  
  private scriptId = 'bfs-dynvis-script';
  private scriptLoaded = false;
  private initialized = false;

  ngOnInit(): void {
    this.loadScript();
  }

  ngAfterViewInit(): void {
    // If script is already loaded, initialize the visualization
    if (this.scriptLoaded && !this.initialized) {
      this.initializeVisualization();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // When vizId or language changes, reinitialize the visualization
    if ((changes['vizId'] || changes['language']) && !changes['vizId']?.firstChange && !changes['language']?.firstChange) {
      if (this.scriptLoaded && this.initialized) {
        console.log(`Reinitializing visualization: ${this.vizId} in language: ${this.lang}`);
        this.reinitializeVisualization();
      }
    }
  }

  ngOnDestroy(): void {
    // Clean up the visualization instance
    this.destroyVisualization();
  }

  private loadScript(): void {
    // Check if script is already loaded
    if (document.getElementById(this.scriptId)) {
      this.scriptLoaded = true;
      return;
    }

    const script = document.createElement('script');
    script.id = this.scriptId;
    script.src = `https://viz.bfs.admin.ch/libs/viz-bfs/dynvis/dynvis-${this.scriptVersion}/dynvis.min.js`;
    script.async = true;
    
    script.onload = () => {
      this.scriptLoaded = true;
      if (!this.initialized) {
        this.initializeVisualization();
      }
    };

    script.onerror = () => {
      console.error('Failed to load BFS visualization script');
    };

    document.head.appendChild(script);
  }

  private initializeVisualization(): void {
    console.log(`Initializing visualization: ${this.vizId} in language: ${this.lang}`);
    
    // Wait a tick to ensure DOM is ready
    setTimeout(() => {
      // The dynvis script automatically initializes elements with fso-datavis-widget class
      // Try to manually trigger initialization if the API is available
      if (window.dynvis && typeof window.dynvis.init === 'function') {
        window.dynvis.init();
      }
      this.initialized = true;
    }, 100);
  }

  private reinitializeVisualization(): void {
    // Destroy the current visualization
    this.destroyVisualization();
    
    // Clear the container
    const container = this.vizContainer.nativeElement;
    container.innerHTML = '';
    
    // Wait a bit then reinitialize
    setTimeout(() => {
      this.initializeVisualization();
    }, 200);
  }

  private destroyVisualization(): void {
    const container = this.vizContainer.nativeElement;
    
    // Try to use dynvis destroy method if available
    if (window.dynvis && typeof window.dynvis.destroy === 'function') {
      window.dynvis.destroy(container);
    }
    
    // Clear any child elements
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
}