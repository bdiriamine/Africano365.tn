import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  urlMaintenance="https://admin.africano365.tn/api/status"
  status:number;
  constructor( private router: Router,private http: HttpClient) {}

  canActivate(): boolean {
    this.http.get(this.urlMaintenance).toPromise()
    .then((response:any) => {
      this.status=response.siteStatus.status
    if( this.status==1){
      this.router.navigate(["Maintenance"])
      return false
    }
    })
  
    return true;
  }
}
