import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './users/user.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newnote: any;
  url: any;
  routerlink: any;
  showUrl: boolean;
  
  constructor(public router: Router){
    this.showUrl = true;
  }
  
  createnote(){
    this.showUrl = false;
    this.router.navigate(["/notes", this.newnote]);
  }
}
