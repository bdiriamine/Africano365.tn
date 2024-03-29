import {  Component, OnInit } from '@angular/core';
import {  Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from 'src/app/models/User';
import jwt_decode from 'jwt-decode';
import io from 'socket.io-client/dist/socket.io';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit {
  socket: io.Socket;
    token = localStorage.getItem("token");
    SOC_URL = 'https://africano365.tn:81';
id;
  tk:any;
  bloque:boolean;
  isSubmitted = false;
  loading = false;
  loginForm: FormGroup;
  date:Date; 
  authboluser=false;
  username: string = localStorage.getItem("user");
  UserPlayer:any;
  userplayer:User ={
 id:undefined,
username:undefined,
    password:undefined,
    agent:undefined,
   score:undefined,
  };
   score :number;

   myOB =Observable.create((observer :Observer<any>)=>{
   
    this.socket.on('balance', function (data:any) {
      if(data.balance==-1){
        localStorage.clear()
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'error',
          timerProgressBar:   false,
          timer: 5000,
          title: "l'utilisateur est déjà connecté dans une autre appareil, merci de bien vérifier...."
        })
        setTimeout(()=>{                           //<<<---using ()=> syntax
          window.location.reload()
     }, 5000);
       
      }
 
      observer.next(data)
      this.score= data.balance
      this.bloque = data.blocked
   });
    
  })

  constructor( private authService: AuthService,private router: Router,){
  }
closeScroll(){
  const element = document.getElementById('divToStyle')
 
  element.style.overflowY = "hidden"
  element.style.height = "100%"

}
OpenScroll(){
  const element = document.getElementById('divToStyle')

  element.style.overflowY = "auto"
  element.style.height = "100%"

}

  ngOnInit() {

    this.loginForm = this.createFormGroup();
    this.UserPlayer = JSON.parse( localStorage.getItem("Users"));
    this.username= localStorage.getItem('user');
    this.connect()
    if(this.UserPlayer){
      this.authboluser=true
   this.myOB.subscribe((data)=>{
   this.score=data.balance
   this.bloque = data.blocked
         },(error) => {
       }, () => {
       
         
       })
     
     }
    this.tk=localStorage.getItem("token")
    if (this.tokenExpired(this.tk) ) {
      localStorage.clear();
      window.location.reload();
      
    }
  
}

connect(){
  this.id=localStorage.getItem("dx")
  this.socket = io.connect(this.SOC_URL, { query: { token: this.token }, 'forceNew': true });
  this.socket.emit('Getbalance', { id: this.id,token: this.token });
}


get formControls() { return this.loginForm.controls; }
createFormGroup(): FormGroup {
  return new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(1)]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
}

gotoLiveScore(){
  this.router.navigate(["Score"])
}
gotodepot(){
  this.router.navigate(["depot"]);
}
gotoHome(){
  this.router.navigate([""]);
 
}
gotoSport(){
  this.router.navigate(["sport"]);
 
}
gotoLive(){
  this.router.navigate(["live-viewSimple"]);
 
}
gotoVR(){
  this.router.navigate(["virtuels"]);
 
}
gotoHot(){
  this.router.navigate(["Hot"]);
}

gotoBlackJack(){
  this.router.navigate(["Black-Jack"]);
 
}
gotoCasino(){
  this.router.navigate(["Casino"]);
 
}
gotoLiveCasino(){
  this.router.navigate(["Live-Casino"]);
 
}
gotoEVO(){
  this.router.navigate(["Evolution"]);
}

gotoactivcompo(){
  this.router.navigate(["bet-history"])
}
gotoJP(){
  this.router.navigate(["JackPot"])
}

exit(){
  this.router.navigate([""]);
  localStorage.clear();
  setTimeout(()=>{                           //<<<---using ()=> syntax
    window.location.reload()
}, 1000);
  
}
private tokenExpired(token: string) {
  var decoded : any = jwt_decode(this.tk);
  const expiry = decoded.exp
  return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}
login(): void {
  this.isSubmitted = true;
  this.loading = true;
  this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe( res => {
      if (res){      
        const myObjStr = JSON.stringify(res);
        localStorage.setItem('token', JSON.parse(myObjStr).token);
        this.userplayer.id= JSON.parse(myObjStr).user.id;
        this.userplayer.username= JSON.parse(myObjStr).user.username;
        this.userplayer.agent= JSON.parse(myObjStr).user.useragent;
        this.userplayer.password=  JSON.parse(myObjStr).user.userpass;
        this.userplayer.score= JSON.parse(myObjStr).user.score;
        localStorage.setItem('dx', this.userplayer.id);
        localStorage.setItem('user', this.userplayer.username);
        localStorage.setItem('score', this.userplayer.score);
      }
      else{
        this.loading = false;
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'error',
          timerProgressBar:   false,
          timer: 5000,
          title: "Nom d'utilisateur ou Mot de passe incorrect !"
        })
      }},err=>{});
}
}