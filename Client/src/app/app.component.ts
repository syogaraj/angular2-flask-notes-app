import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './users/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserComponent]
})
export class AppComponent {
  title = 'app works!';
}
