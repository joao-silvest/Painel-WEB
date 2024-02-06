import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public router:Router){

  }

  onHome(){
    this.router.navigate(['./painel-web/home'])
  }
  onAutomation(){
    this.router.navigate(['./painel-web/automation'])
  }
  onAudit(){
    this.router.navigate(['./painel-web/audit'])
  }

}
