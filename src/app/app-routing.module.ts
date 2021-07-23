import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ComptepersonnelComponent } from './components/comptepersonnel/comptepersonnel.component';
import { SportComponent } from './components/sport/sport.component';
import { LiveViewSimpleComponent } from './components/live-view-simple/live-view-simple.component';
import { AuthGuardService } from './services/auth-guard.service';
import { InfopersoComponent } from './components/infoperso/infoperso.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { VirtualsComponent } from './components/virtuals/virtuals.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DepotretraithistoriqueComponent } from './components/depotretraithistorique/depotretraithistorique.component';
import { HistoryiframeparisComponent } from './components/historyiframeparis/historyiframeparis.component';
import { BetslipComponent } from './components/betslip/betslip.component';
import { LivescoreComponent } from './components/livescore/livescore.component';
import { HotComponent } from './components/hot/hot.component';
import { CasinoComponent } from './components/casino/casino.component';
import { LiveCasinoComponent } from './components/live-casino/live-casino.component';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { JackpotComponent } from './components/jackpot/jackpot.component';
import { ResponsiblegamingComponent } from './components/responsiblegaming/responsiblegaming.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AMLKycComponent } from './components/amlkyc/amlkyc.component';
import { EvolutionComponent } from './components/evolution/evolution.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { MaintenanceService } from './services/maintenance.service';




const routes: Routes = [

   
    { path: '',   redirectTo: 'home', pathMatch: 'full', },
    {path: 'home', component: HomeComponent ,canActivate:[MaintenanceService] }  ,
    {path: 'personal-account', component: ComptepersonnelComponent,canActivate:[MaintenanceService] }  ,
    {path: 'Responsible-Gaming', component: ResponsiblegamingComponent,canActivate:[MaintenanceService] }  ,
    {path: 'Pravicy-Policy', component: PrivacyPolicyComponent,canActivate:[MaintenanceService] }  ,
    {path: 'AML-KYC-Policy', component: AMLKycComponent,canActivate:[MaintenanceService] }  ,
    {path: 'sport', component: SportComponent  , canActivate:[MaintenanceService]}  ,
    {path: 'live-viewSimple', component: LiveViewSimpleComponent,canActivate:[MaintenanceService] }  ,
    {path: 'personal-details', component: InfopersoComponent ,canActivate: [AuthGuardService,MaintenanceService ] }  ,
    {path: 'change-password', component: ChangepasswordComponent ,canActivate: [AuthGuardService,MaintenanceService ] }  ,
    {path: 'transaction-history', component: TransactionsComponent ,canActivate: [AuthGuardService,MaintenanceService ] }  ,
    {path: 'depot-retrait-Historique', component: DepotretraithistoriqueComponent  ,canActivate: [AuthGuardService,MaintenanceService ] }  ,
    {path: 'History-Paris-Iframe', component: HistoryiframeparisComponent  ,canActivate: [AuthGuardService,MaintenanceService ] }  ,
    {path: 'Hot', component: HotComponent  ,canActivate: [AuthGuardService ] }  ,
    //{path: 'Casino', component: CasinoComponent  ,canActivate: [AuthGuardService ] }  ,
    {path: 'Live-Casino', component: LiveCasinoComponent ,canActivate: [AuthGuardService,MaintenanceService ]  }  ,
    {path: 'Black-Jack', component: BlackjackComponent  ,canActivate: [AuthGuardService,MaintenanceService ] }  ,
    {path: 'JackPot', component: JackpotComponent  ,canActivate: [AuthGuardService ,MaintenanceService] }  ,
    {path: 'History-Paris-Iframe', component: HistoryiframeparisComponent  ,canActivate: [AuthGuardService ,MaintenanceService] }  ,
    {path: 'virtuels', component: VirtualsComponent ,canActivate: [AuthGuardService ,MaintenanceService]  }  ,
    {path: 'Score', component: LivescoreComponent ,canActivate:[MaintenanceService]  }  ,
    {path: 'Casino', component: CasinoComponent ,canActivate: [AuthGuardService ,MaintenanceService] }  ,
    {path: 'Evolution', component: EvolutionComponent ,canActivate: [AuthGuardService ,MaintenanceService]  }  ,
    {path: 'Maintenance', component: MaintenanceComponent  }  ,
    {path: '404', component: NotfoundComponent ,canActivate:[MaintenanceService]  }  ,
    { path: '**', component: NotfoundComponent,canActivate:[MaintenanceService] },
    
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
