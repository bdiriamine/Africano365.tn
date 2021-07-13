
import {  Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})


export class TransactionsComponent implements OnInit {
  
  BOL:boolean=false;
  transactions:any;
  zindex=1;
  UserPlayer:any;
lengthdata :number;
  myOB =Observable.create((observer :Observer<any>)=>{observer.next(this.getdTicketsPlayer())})
  constructor(private transc: TransactionsService) {
   
   
   }

  ngOnInit() {
    this.UserPlayer = JSON.parse( localStorage.getItem("Users"));
    if(this.UserPlayer){
      this.myOB.subscribe((data)=>{

      },(error) => {
        console.log(error);
    }, () => { console.log('Fini !'); })
  
                        }
                      
              }
getdTicketsPlayer(){
  
    this.transc.getTransictions(this.UserPlayer.id).subscribe(res =>{
      this.lengthdata= res.transactions.length;
    if( res)
    {
      this.BOL= true;
      this.transactions =res.transactions.reverse();
      this.transactions.forEach(element => {
        element.Date=new Date(element.Date)
      });
   
  
    }else{
      this.BOL=false; 
    }
    })
  }
getdTicketsPlayerPage(page){
    this.zindex=page;
    this.transc.getTransictionsByPage(this.UserPlayer.id,page).subscribe(res =>{
    this.lengthdata= res.transactions.length;
    if( res)
    {
      
      this.BOL= true;
      this.transactions =res.transactions.reverse();
      this.transactions.forEach(element => {
        element.Date=new Date(element.Date)
      });
   
  
    }else{
      this.BOL=false; 
    }
    })
  }
backTo(){
    this.zindex=this.zindex - 1
      
    if(this.zindex<1){
      this.zindex=1
    }
  
    this.transc.getTransictionsByPage(this.UserPlayer.id,this.zindex).subscribe(res =>{
  
    if( res)
    {
      this.BOL= true;
      this.transactions =res.transactions.reverse();
      
      this.transactions.forEach(element => {
        element.Date=new Date(element.Date)
      });
   
  
    }else{
      this.BOL=false; 
    }
    })
  }

  
nextTo(){

    if(this.zindex<4){
    
      this.zindex=this.zindex + 1

    }
    this.transc.getTransictionsByPage(this.UserPlayer.id,this.zindex).subscribe(res =>{
    if( res)
    {
      this.BOL= true;
      this.transactions =res.transactions.reverse();
      this.transactions.forEach(element => {
        element.Date=new Date(element.Date)
      });
   
  
    }else{
      this.BOL=false; 
    }
    })
  }

}

