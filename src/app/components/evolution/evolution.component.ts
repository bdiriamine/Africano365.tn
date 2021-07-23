import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CasinoProvidersService } from 'src/app/services/casino-providers.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {ALLgames:any;
  iframUrl;
 element2;
 username: string;
  iframUrl2: string;
 load:boolean;
  constructor(private sanitizer: DomSanitizer,private router: Router) { }

  ngOnInit(): void {
    const element = document.getElementById('hider')
    element.style.display = "none"
     this.element2 = document.getElementById('ftr')
     this.element2.style.display = "none"
     this.username=localStorage.getItem("user");
     this.load=true
    this.loadInitPost()
  
  }
  ngOnDestroy(){
    this.element2.style.display = "block"
  }
  loadInitPost() {
    if(this.username){
      this.iframUrl2=localStorage.getItem("urliframe")  
      this.iframUrl2=this.iframUrl2+"/Game/Play?gameId=5_1370_0_0"
        this.iframUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.iframUrl2)
        this.load=false
    }
  }
  gotohome(){
    this.router.navigate(["home"]);
  }
  
 }
