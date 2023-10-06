import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  backgroundImageUrl='../../../assets/images/Reactnative.pny'
  constructor(private sanitizer: DomSanitizer) {}
  getBackgroundStyle(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`background-image: url('${this.backgroundImageUrl}');`);
  }
}
