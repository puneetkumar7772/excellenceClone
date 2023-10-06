import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent {
  // @ViewChild('secondSection') secondSection: ElementRef|any;

  // constructor() {}

  // ngAfterViewInit() {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         this.secondSection.nativeElement.classList.add('visible');
  //       } else {
  //         this.secondSection.nativeElement.classList.remove('visible');
  //       }
  //     });
  //   });

  //   // Observe the section element
  //   observer.observe(this.secondSection.nativeElement);
  // }
}
