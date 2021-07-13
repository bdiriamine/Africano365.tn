import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CasinoProvidersService } from 'src/app/services/casino-providers.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {
  games:any;
  ALLgames:any;
  load:boolean;
  allgames:any;
  urlHref:string;
  part: any;
  partText: any;
  constructor(private casiprovider : CasinoProvidersService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   
    const element = document.getElementById('hider')
    element.style.display = "none"
    this.load=true
    this.spinner.show();
    this.loadInitPost()
    
  }

  loadInitPost() {
    this.casiprovider.getTopGames().toPromise()
    .then(response => {
      this.allgames=response.body;
      this.games=this.filterData()
      this.load=false
      this.spinner.hide();
    })
   
  }


      filterData() {
        return this.allgames.filter(object => {
         
          return object['count'] > 5;
        });
      }
      startGame(game:string,gameGabi:any,menutiTLE:any){
        if(gameGabi==1){
        
          this.spinner.show()
          this.casiprovider.starGabi(game ,gameGabi,menutiTLE);
        }else{
          this.spinner.show()
          this.casiprovider.star(game).toPromise()
          .then((response : any) => {
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
   