import {  Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

import { HistoryDepotRetraitService } from 'src/app/services/history-depot-retrait.service';

@Component({
  selector: 'app-depotretraithistorique',
  templateUrl: './depotretraithistorique.component.html',
  styleUrls: ['./depotretraithistorique.component.css']
})
export class DepotretraithistoriqueComponent implements OnInit {
  etat:any
  montantjoue:any;
  montantgain :any;
  BOL:boolean;
  retraitDepot:any;
  TicketsAffiche:any;
  TicketbetList:[{}];
  isSubmitted = false;
  loading = false;
  username: string;
  UserPlayer:any;

  myOB =Observable.create((observer :Observer<any>)=>{observer.next(this.getdTicketsPlayer())})
  constructor(private authService: AuthService,private historydepotretrait: HistoryDepotRetraitService) {
    this.UserPlayer = JSON.parse( localStorage.getItem("Users"));
    this.username= localStorage.getItem('user');
   }

  ngOnInit() {
    const element = document.getElementById('hider')
    element.style.display = "none"
    if(this.UserPlayer){
      this.myOB.subscribe((data)=>{
   
      },(error) => {
        console.log(error);
    }, () => { console.log('Fini !'); })
  
                        }
              }
  getdTicketsPlayer(){
  
    this.historydepotretrait.getHistoryDepotRetrait(this.UserPlayer.id).subscribe(res =>{
    if( res)
    {
      this.BOL= true;
      this.retraitDepot = res.depot;
  
    }else{
      this.BOL=false; 
    }
    })
  }
  

}
