import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrls: ['./livescore.component.css']
})
export class LivescoreComponent implements OnInit {
  element2;
  constructor() { }

  ngOnInit(): void {
    const element = document.getElementById('hider')
    element.style.display = "none"
     this.element2 = document.getElementById('ftr')
     this.element2.style.display = "none"
  
  }
  ngOnDestroy(){
    this.element2.style.display = "block"
  }
}
