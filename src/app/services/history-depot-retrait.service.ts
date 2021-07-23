import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})

export class HistoryDepotRetraitService {
  private url = "http://localhost:8000/api"
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService,) { }
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getHistoryDepotRetrait(
    PlayerId,

  ): Observable<any> {
   
    return this.http
      .get(`${this.url}/depotHistory`,{
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `bearer ${localStorage.getItem('token')}`
        })
      })
      .pipe(
        first(),
        tap((UserSoldeandBalance) => {

        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
           
          
          }>("login")
        )
      );
  }
  
}

