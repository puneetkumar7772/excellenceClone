import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excellencesite';
  sidenavWidth = '0';
  image = 'inline';

  toggleSidenav(): void {
    const logo = document.querySelector('.logo') as HTMLElement;
    this.sidenavWidth = this.sidenavWidth === '0' ? '250px' : '0';
    if (this.sidenavWidth === '0') {
      logo.style.display = 'inline'
    } else {
      logo.style.display = 'none'
    }

  }
  hideNav(): void {
    const logo = document.querySelector('.logo') as HTMLElement;
    this.sidenavWidth = this.sidenavWidth === '0' ? '55px' : '0';
    if (this.sidenavWidth === '0') {
      logo.style.display = 'inline'
    }

  }
}
