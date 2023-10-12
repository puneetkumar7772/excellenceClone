import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<', '>'],
        responsive: {
          0: {
            items: 1
          },
        }
      });
    });
  }
  activeIndex: number = 1; // Set the middle image as active by default


  selectImage(index: number) {
    this.activeIndex = index;
  }
}
