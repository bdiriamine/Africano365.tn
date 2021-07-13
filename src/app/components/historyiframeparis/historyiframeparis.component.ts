import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-historyiframeparis',
  templateUrl: './historyiframeparis.component.html',
  styleUrls: ['./historyiframeparis.component.css']
})
export class HistoryiframeparisComponent implements OnInit {
  username: string;
  urls:any;
  constructor( private sanitizer: DomSanitizer) {}
  ngOnInit() {
    const element = document.getElementById('hider')
    element.style.display = "none"
    this.getuser();
    if (this.username ){
      let tokenInfo = this.getDecodedAccessToken(localStorage.getItem("token")); // decode token
      this.urls=this.sanitizer.bypassSecurityTrustResourceUrl(tokenInfo.iframeURL);
      this.urls=this.urls.changingThisBreaksApplicationSecurity.toString()
      this.urls=this.urls+'&path=/Ticket'
      this.urls=this.sanitizer.bypassSecurityTrustResourceUrl(this.urls);
     }
  }
  getuser(){this.username=localStorage.getItem("user");}
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
}