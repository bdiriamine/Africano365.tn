import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CasinoProvidersService } from 'src/app/services/casino-providers.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {
  games:any[];
 y: any []; // VARIABLE pour ajouter d'autre jeux blackjack sur games
 load:boolean;
  urlHref: any;
  part: any;
  partText: any;
  constructor(private casiprovider : CasinoProvidersService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   //----------------------- hide betslip ------------------//
    const element = document.getElementById('hider')
    element.style.display = "none"
    this.load=true
    this.spinner.show();
    this.loadInitPost()
    
  }
//--------- Fonction pour filtre les jeux selon GameName -------------//
transform(items: any, filterdata: string): any[] {
      
  if(!items) return [];
  if(!filterdata) return items;
   filterdata = filterdata.toString().toLowerCase();
   return items.filter( it => {
   return it.GameName.toLowerCase().includes(filterdata);
    });
    }
    //---------- predre les jeux qui contient blackjack name---------//
  loadInitPost() {
    this.casiprovider.getAllCasinoBlackJack().toPromise()
    .then(response => {
      this.games =this.transform(response.body,"blackjack"); 
      this.y=this.transform(response.body,"black jack");
      for (let i = 0; i < this.y.length; i++) {
        this.games.push(this.y[i]);
      }
      this.load=false
     this.spinner.hide();
    })
  }
  startGame(game:string,gameGabi:any,menutiTLE:any){
    if(gameGabi==1){
      this.load=true
      this.spinner.show()
      this.casiprovider.starGabi(game ,gameGabi,menutiTLE);
    }else{
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