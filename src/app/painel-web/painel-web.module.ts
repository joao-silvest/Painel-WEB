import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelWebRoutingModule } from './painel-web-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AutomationComponent } from './automation/automation.component';
import { AuditComponent } from './audit/audit.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AutomationComponent,
    AuditComponent
  ],
  imports: [
    CommonModule,
    PainelWebRoutingModule
  ]
})
export class PainelWebModule { }
