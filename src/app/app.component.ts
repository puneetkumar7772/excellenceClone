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

   isSidenavOpen = false;

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  getSideNavStyles() {
    let styles: {
      [key: string]: string;
    } = {
      'background': '#fff',
      '-webkit-clip-path': 'polygon(0 0,45% 0,100% 100%,0% 100%)',
      'clip-path': 'polygon(0 0,45% 0,100% 100%,0% 100%)',
      'position': 'fixed',
      'height': '100vh',
      'top': '0',
      'bottom': '0',
      'left': '0',
      'z-index': '99999',
      'transition': '1s',
      'filter': 'drop-shadow(8px 0px 4px rgba(145,144,135,0.28))'
    };

    if (this.isSidenavOpen) {
      styles['width'] = '31vw';

    } else {
      styles['width'] = '0';
      // Add other closed state styles here
    }

    return styles;
  }
 hideNav(): void {
  this.isSidenavOpen = false; // Close the sidebar
}
}
