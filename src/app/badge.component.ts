import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';

type BadgeStatus = 'stable' | 'unstable' | 'experimental' | 'underConstruction' | 'neutral';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, NgStyle],
  template: `
    <div 
      class="badge-wrapper"
      [ngStyle]="getStyles()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .badge-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 700;
      line-height: 12px;
      min-width: 20px;
      border-radius: 20px;
      padding: var(--badge-padding, 4px 10px);
    }

    .badge-wrapper ::ng-deep svg {
      height: 12px;
      width: 12px;
      margin-right: 4px;
      margin-top: -2px;
    }

    .badge-wrapper ::ng-deep svg path {
      fill: currentColor;
    }
  `]
})
export class BadgeComponent {
  @Input() compact: boolean = false;
  @Input() status: BadgeStatus = 'neutral';

  getStyles(): { [key: string]: string } {
    // Theme colors (adapt to your theme)
    const themes = {
      light: {
        stable: { color: '#f44336', bg: '#ffebee', border: '#f44336' },
        unstable: { color: '#ff6b6b', bg: '#ffe0e0', border: '#ff6b6b' },
        experimental: { color: '#ff9800', bg: '#fff3e0', border: '#ff9800' },
        underConstruction: { color: '#4caf50', bg: '#e8f5e9', border: '#4caf50' },
        neutral: { color: '#999', bg: '#f5f5f5', border: '#ddd' },
      }
    };

    const statusTheme = themes.light[this.status] || themes.light.neutral;

    return {
      'color': statusTheme.color,
      'background-color': statusTheme.bg,
      'box-shadow': `inset 0 0 0 1px ${statusTheme.border}`,
      '--badge-padding': this.compact ? '4px 7px' : '4px 10px',
    } as any;
  }
}