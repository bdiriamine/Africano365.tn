import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  element2: HTMLElement;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const element = document.getElementById('hider')
    element.style.display = "none"
     this.element2 = document.getElementById('ftr')
     this.element2.style.display = "none"
     const element3 = document.getElementById('hd')
    element3.style.display = "none"
     
  }
  gotoHome(){
    this.router.navigate([""]);
   
  }

}
