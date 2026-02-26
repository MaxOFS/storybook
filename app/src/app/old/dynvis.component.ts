import { Component, Input, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'dynvis-chart',
  standalone: true,
  templateUrl: './dynvis.component.html'
})
export class DynvisComponent implements AfterViewInit, OnDestroy {
  @Input() vizId: string = '';
  @Input() lang: string = 'd';
  
  private scriptElement?: HTMLScriptElement;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    // Vérifier si le script dynvis n'est pas déjà chargé
    const existingScript = document.querySelector('script[src*="dynvis.min.js"]');
    
    if (!existingScript) {
      this.scriptElement = this.renderer.createElement('script') as HTMLScriptElement;
      this.scriptElement.src = 'https://viz.bfs.admin.ch/libs/viz-bfs/dynvis/dynvis-v0.9/dynvis.min.js';
      this.scriptElement.type = 'text/javascript';
      this.renderer.appendChild(document.body, this.scriptElement);
    } else {
      // Si le script existe déjà, forcer la réinitialisation du widget
      this.reinitializeWidget();
    }
  }

  private reinitializeWidget() {
    // Attendre que dynvis soit chargé et réinitialiser le widget
    if ((window as any).dynvis) {
      (window as any).dynvis.init();
    }
  }

  ngOnDestroy() {
    // Optionnel : nettoyer le script si nécessaire
    // Note: on ne retire généralement pas le script car d'autres instances peuvent l'utiliser
  }
}