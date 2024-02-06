import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AutomationComponent } from './automation/automation.component';
import { AuditComponent } from './audit/audit.component';

const routes: Routes = [
  {path: 'navbar',component:NavbarComponent},
  {path: 'footer',component:FooterComponent},
  {path: 'home',component:HomeComponent},
  {path: 'automation',component:AutomationComponent},
  {path: 'audit',component:AuditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelWebRoutingModule { }
