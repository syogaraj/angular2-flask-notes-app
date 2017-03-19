import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Autosize } from 'angular2-autosize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './users/user.component';

const appRoutes: Routes = [
  {path: 'notes/:username', component: UserComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    Autosize
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }