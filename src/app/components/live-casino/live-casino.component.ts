import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CasinoProvidersService } from 'src/app/services/casino-providers.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-live-casino',
  templateUrl: './live-casino.component.html',
  styleUrls: ['./live-casino.component.css'],
  
})
export class LiveCasinoComponent implements OnInit {
filtreGame="Tous les jeux";
selectedDay: string = '';
games:any;
ALLgames:any;
provider:any;
filterdata = '';
url = 'https://africano365.tn:81/api/live-games';
urliframe=localStorage.getItem("cs");
load:boolean;
  urlHref: any;
  part: any;
  partText: any;
constructor(private casiprovider : CasinoProvidersService,private http: HttpClient, private spinner: NgxSpinnerService) { 

}
ngOnInit(): void {
  const element = document.getElementById('hider')
  element.style.display = "none";
  this.provider = this.casiprovider.categoryNamesLiveCasino;
  this.load=true;
   this.loadInitPost();
}
loadInitPost() {
  return this.http.get(this.url, {
    params: {
      page: 1,
      limit: 900,
      url:  this.urliframe ,
    },
    observe: 'response'
  }).toPromise()
  .then(response => {
    this.games= response.body
    this.ALLgames=response.body
    this.spinner.hide();
    this.load=false
  })
  .catch();
}


    selectChange(event:any){
    
      this.selectedDay= event.target.value
      switch (this.selectedDay) {
        case "Tous les jeux":
          this.games=this.ALLgames;
           break;
           case "Bet games":
            this.games=this.filterData("Bet games");
           break;
           case "Evolution":
            this.games=this.filterData("Evolution");
           break;
           case "Ezugi":
            this.games=this.filterData("Ezugi");
           break;
           case "Vivo Games":
            this.games=this.filterData("Vivo Games");
           break;
      default:
          console.log("No such day exists!");
          break;
      }
    }

blackjackCasino(){
        this.games=this.transform(this.ALLgames,"blackjack");
}
RouletteCasino(){
        this.games=this.transform(this.ALLgames,"roulette");
        this.spinner.hide()
}
baccara(){
        this.games=this.transform(this.ALLgames,"Baccarat");
        this.spinner.hide()
}
allgamess(){this.games=this.ALLgames;}
poker(){
        this.games=this.transform(this.ALLgames,"pocker");
        this.spinner.hide()
}
transform(items: any[], filterdata: string): any {
       if(!items) return [];
          if(!filterdata) return items;
             filterdata = filterdata.toString().toLowerCase();
             return items.filter( it => {
             return it.GameName.toLowerCase().includes(filterdata);
              });
}


filterData(locationName) {
  this.load=false
  return this.ALLgames.filter(object => {
    return object['Provider'] == locationName;});
}
startGame(game:string,gameGabi:any,menutiTLE:any){
  if(gameGabi==1){
    this.filtreGame="Tous les jeux";
    this.load=true
    this.spinner.show()
    this.casiprovider.starGabi(game ,gameGabi,menutiTLE);
    this.load=false
  }else{
    this.filtreGame="Tous les jeux";
    this.load=true
    this.spinner.show()
    this.casiprovider.star(game).toPromise()
    .then((response : any) => {
      this.load=false
      this.spinner.hide()
      this.part = response.gameUrl
      this.partText = this.part.substring(
        this.part.lastIndexOf("://") + 3,
    
  );
  this.urlHref="https://"+this.partText
  window.location.href=this.urlHref;
    })
    .catch((err) => { 
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'error',
        timerProgressBar:   false,
        timer: 5000,
        title: "Votre session a expiré veuillez vous reconnecter"
      });
      setTimeout(()=>{  
        localStorage.clear()
        window.location.reload()
   }, 5000);
      
  });
  }


}
}
