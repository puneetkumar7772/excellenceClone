import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-ecommercepage',
  templateUrl: './ecommercepage.component.html',
  styleUrls: ['./ecommercepage.component.css']
})
export class EcommercepageComponent {
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
