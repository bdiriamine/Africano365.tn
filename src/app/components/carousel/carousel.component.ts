import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  
})
export class CarouselComponent implements OnInit {
  //--------------- Carousel de casino --------------------//
 slides = [
  
   
    {
      url: '../../../assets/B2.jpg',
    
    },
    {
      url: '../../../assets/B3.jpg',
    
    },
    {
      url: '../../../assets/B4.jpg',
   
    }
    
  ];



constructor() {
  }

  ngOnInit() {
  }

}