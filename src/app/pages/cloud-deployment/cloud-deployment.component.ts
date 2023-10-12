import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-cloud-deployment',
  templateUrl: './cloud-deployment.component.html',
  styleUrls: ['./cloud-deployment.component.css']
})
export class CloudDeploymentComponent {
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
