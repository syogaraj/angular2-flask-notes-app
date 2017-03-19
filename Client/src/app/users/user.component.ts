import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'user',
    templateUrl:'user.component.html',
    styles:[`button{
                    margin-left:45%;
                    margin-top: 10px;
                }
            textarea{
                display: table-cell;
            }`]
})

export class UserComponent{
    username: any;
    notes: any;
    appurl = "http://localhost:5000/notes/"+this.username;

    constructor(private http: Http, private route: ActivatedRoute) { 
        this.username = this.route.snapshot.params['username']
        console.log(this.username);
    }

    ngOnInit(){
        this.http.get(this.appurl).subscribe(
            data=> {
                this.notes=data;
            }
        )
    }
    Save(): void{
        console.log('Clicked -- save '+this.notes);
    }
}