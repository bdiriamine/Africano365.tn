import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptepersonnel',
  templateUrl: './comptepersonnel.component.html',
  styleUrls: ['./comptepersonnel.component.css']
})
export class ComptepersonnelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const element = document.getElementById('hider')
    element.style.display = "none"
  }

}
