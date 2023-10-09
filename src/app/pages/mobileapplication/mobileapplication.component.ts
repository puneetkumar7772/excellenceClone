import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-mobileapplication',
  templateUrl: './mobileapplication.component.html',
  styleUrls: ['./mobileapplication.component.css']
})
export class MobileapplicationComponent {
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
}
