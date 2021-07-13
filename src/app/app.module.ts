import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComptepersonnelComponent } from './components/comptepersonnel/comptepersonnel.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LiveViewSimpleComponent } from './components/live-view-simple/live-view-simple.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { InfopersoComponent } from './components/infoperso/infoperso.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { VirtualsComponent } from './components/virtuals/virtuals.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LeftbardepotusersComponent } from './components/leftbardepotusers/leftbardepotusers.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DepotretraithistoriqueComponent } from './Components/depotretraithistorique/depotretraithistorique.component';
import { SportComponent } from './components/sport/sport.component';
import { HistoryiframeparisComponent } from './Components/historyiframeparis/historyiframeparis.component';
import { BetslipComponent } from './Components/betslip/betslip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { LivescoreComponent } from './Components/livescore/livescore.component';
import { CasinoComponent } from './Components/casino/casino.component';
import { LiveCasinoComponent } from './Components/live-casino/live-casino.component';
import { JackpotComponent } from './Components/jackpot/jackpot.component';
import { BlackjackComponent } from './Components/blackjack/blackjack.component';
import { HotComponent } from './Components/hot/hot.component';
import { ResponsiblegamingComponent } from './Components/responsiblegaming/responsiblegaming.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';
import { AMLKycComponent } from './Components/amlkyc/amlkyc.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FilterPipe } from './components/casino/app.filtre';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EvolutionComponent } from './components/evolution/evolution.component';
import { SafePipe } from './components/home/SafePipe ';
import { SortPipe } from './Sort.pipe';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { LoadingspComponent } from './components/loadingsp/loadingsp.component';
export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ComptepersonnelComponent,
    HeaderComponent,
    LiveViewSimpleComponent,
    InfopersoComponent,
    ChangepasswordComponent,
    TransactionsComponent,
    VirtualsComponent,
    NotfoundComponent,
    LeftbardepotusersComponent,
    DepotretraithistoriqueComponent,
    SportComponent,
    HistoryiframeparisComponent,
    BetslipComponent,
    CarouselComponent,
    LivescoreComponent,
    CasinoComponent,
    LiveCasinoComponent,
    JackpotComponent,
    BlackjackComponent,
    HotComponent,
    ResponsiblegamingComponent,
    PrivacyPolicyComponent,
    AMLKycComponent,
    FilterPipe,
    EvolutionComponent,
    SafePipe,SortPipe, MaintenanceComponent, LoadingspComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,NgImageSliderModule,InfiniteScrollModule,NgxSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
        
      },
    }),
    NgbModule,
  
   
  ],
  providers: [ JwtHelperService ,{provide : LocationStrategy ,useClass:HashLocationStrategy,}],
  bootstrap: [AppComponent],

})
export class AppModule { }
