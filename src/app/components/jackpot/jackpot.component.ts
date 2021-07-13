import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CasinoProvidersService } from 'src/app/services/casino-providers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {
  games:any[];
  load:boolean;
  urlHref: any;
  part: any;
  partText: any;
  constructor(private casiprovider : CasinoProvidersService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   
    const element = document.getElementById('hider')
    element.style.display = "none"
    this.load=true
    this.loadInitPost()
    
  }

  loadInitPost() {
    this.casiprovider.getAllCasinoJACKPOT().toPromise()
    .then(response => {
      this.games=this.transform(response.body,"Jackpot");
 this.load=false
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


      transform(items: any, filterdata: string): any[] {
      
        if(!items) return [];
        if(!filterdata) return items;
         filterdata = filterdata.toString().toLowerCase();
         return items.filter( it => {
         return it.GameName.toLowerCase().includes(filterdata);
          });
          }

}
