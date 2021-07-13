import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoperso',
  templateUrl: './infoperso.component.html',
  styleUrls: ['./infoperso.component.css']
})
export class InfopersoComponent implements OnInit {
  firsname:string;
  user:any
  ville:string;
  satecr:Date;
  etat:string;
  constructor() { }

  ngOnInit() {
    this.user=localStorage.getItem("Users")
    this.firsname=JSON.parse(this.user).username
    this.ville=JSON.parse(this.user).gouvernement
    this.satecr=JSON.parse(this.user).created_at
    this.etat=JSON.parse(this.user).activated
    const element = document.getElementById('hider')
    element.style.display = "none"
  }

}
