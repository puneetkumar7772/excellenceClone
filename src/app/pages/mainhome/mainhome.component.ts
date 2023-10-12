import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent {
  activeIndex: number = 1; // Set the middle image as active by default


  selectImage(index: number) {
    this.activeIndex = index;
  }
}
