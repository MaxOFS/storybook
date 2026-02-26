import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'dw-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dw.component.html'
})
export class DWComponent implements AfterViewInit, OnDestroy {
    @Input() set iframeUrl(url: string) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    
    safeUrl: SafeResourceUrl = '';
    private messageListener: (event: MessageEvent) => void;
  
    constructor(
      private sanitizer: DomSanitizer,
      private elementRef: ElementRef
    ) {
      this.messageListener = (event: MessageEvent) => {
        if (event.data["datawrapper-height"] !== undefined) {
          const iframes = this.elementRef.nativeElement.querySelectorAll("iframe");
          for (const chartId in event.data["datawrapper-height"]) {
            for (let i = 0; i < iframes.length; i++) {
              if (iframes[i].contentWindow === event.source) {
                iframes[i].style.height = event.data["datawrapper-height"][chartId] + "px";
              }
            }
          }
        }
      };
    }
  
    ngAfterViewInit() {
      window.addEventListener("message", this.messageListener);
    }
  
    ngOnDestroy() {
      window.removeEventListener("message", this.messageListener);
    }
  }