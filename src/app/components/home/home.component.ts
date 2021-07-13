import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CasinoProvidersService } from 'src/app/services/casino-providers.service';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  username: string;
  imageArray:any
  imageObject:any;
  iframUrl:any;
  session:any;
  ALLgames: any;
  games: any;
  urlHref: any;
  element:any;
  element5:any;
  element3:any;
  elementlog:any;
  authboluser:boolean;
  screenWidth: number;
  element6:any
  element7:any
  element8:any
  element9:any
  constructor(private casiprovider : CasinoProvidersService,private router: Router ,private sanitizer: DomSanitizer,){}
  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.authboluser=false
    this.element = document.getElementById('hider')
    this.element.style.display = "none"
    this.element5 = document.getElementById('ftr')
    this.element5.style.display = "block"
    this.element3 = document.getElementById('hd')
    this.element3.style.display = "block"
    
    this.loadInitPost()
    this.username=localStorage.getItem("user");
 if (this.username ){ 
      this.session=localStorage.getItem("session")
    this.iframUrl= localStorage.getItem("urliframe",)
    this.iframUrl= this.sanitizer.bypassSecurityTrustResourceUrl(`https://afri.ses.bet/(S(${this.session}))/Match/PopularMatchesWidget`)
    this.authboluser=true
   
    }else{
     

    }
  }

  getuser(){this.username=localStorage.getItem("user"); }
  gotoSport(){this.router.navigate(["sport"]);}  
  gotoVR(){this.router.navigate(["virtuels"]);}
  gotoCasino(){this.router.navigate(["Casino"]);}
  gotoLiveCasino(){this.router.navigate(["Live-Casino"]);}
  gotoJP(){this.router.navigate(["JackPot"])}
  gotoBlackJack(){this.router.navigate(["Black-Jack"]);}
  gotoLive(){this.router.navigate(["live-viewSimple"]);}
  gotoRT(){this.router.navigate(["Score"]);}
  goTO(event){this.imageArray = this.imageObject[event].direc;
  this.router.navigateByUrl(this.imageArray)  ;
  
}

loadInitPost() {
  this.casiprovider.getAllCasinoGames().toPromise()
  .then(response => {
    this.games= response.body;
   
  })
 }



loginsession(){
  this.elementlog = document.getElementById('id01')
  this.elementlog.style.display = "block"
  console.log(this.elementlog)
    }
    startGame(game:string){
      this.casiprovider.star(game).toPromise()
      .then((response : any) => {
     
        this.urlHref=response.gameUrl
        window.location.href=this.urlHref;
      })
        }



        
}
