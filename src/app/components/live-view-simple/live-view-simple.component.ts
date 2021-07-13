import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: 'app-live-view-simple',
  templateUrl: './live-view-simple.component.html',
  styleUrls: ['./live-view-simple.component.css']
})
export class LiveViewSimpleComponent implements OnInit {
  username: string;
  isLoading = true;
  urlsi: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
 
  
   }

  ngOnInit() {
    const element = document.getElementById('hider')
    element.style.display = "block"
    this.username=localStorage.getItem("user");
    if (this.username ){
      this.urlsi= localStorage.getItem("urliframe");
      this.urlsi= this.sanitizer.bypassSecurityTrustResourceUrl(this.urlsi+"/live");
      this.isLoading = !this.isLoading;
    
     }
  }

}
