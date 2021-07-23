import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CasinoProvidersService } from 'src/app/services/casino-providers.service';

@Component({
  selector: 'app-virtuals',
  templateUrl: './virtuals.component.html',
  styleUrls: ['./virtuals.component.css']
})
export class VirtualsComponent implements OnInit {
  ALLgames:any;
  iframUrl;
 games;
 element;
 element2;
 username: string;
 monObjetcnxCasino ={"page":2,"url":"", "limit":3};
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'mon-jeton'
  })
};
load:boolean;
urlGet:any;
limit:any;
url = 'http://localhost:8000/api/games';
  constructor(private casiprovider : CasinoProvidersService,private sanitizer: DomSanitizer,private http: HttpClient,) {
    this.username=localStorage.getItem("user");
  
   }

  ngOnInit(): void {
    this.load=true
    this.element = document.getElementById('hider')
    this.element.style.display = "none"
     this.element2 = document.getElementById('ftr')
     this.element2.style.display = "none"
    if(this.username){
      this.urlGet= localStorage.getItem("cs")
      this.limit=2126;
      this.http.get(this.url, {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `bearer ${localStorage.getItem('token')}`
        }),
        params: {
          page: 1,
          limit: this.limit,
          url:  this.urlGet ,
        },
        observe: 'response'
      }).toPromise()
      .then(response => {
        this.ALLgames= response.body
        this.games=this.filterDataByCategory()
        this.games[0].url=this.games[0].url.replaceAll('"','');
        console.log(this.games[0].url);
        
        this.iframUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.games[0].url)
        this.load=false
      })
    
    }
    else{
 
     
      this.iframUrl= "https://afri.ses.bet/(S(401b43b4-f94a-41cd-ab6a-a6829c06587a))/Game/Play?gameId=5_1132_0_0";
  
      this.iframUrl= this.sanitizer.bypassSecurityTrustResourceUrl( this.iframUrl)
      this.load=false
    }
   

    
  }
  ngOnDestroy(){
    this.element2.style.display = "block"
  }

  filterDataByCategory() {
    return this.ALLgames.filter(object => {
 
      return object['Provider'] == "Golden Race";
    });
  }
}
