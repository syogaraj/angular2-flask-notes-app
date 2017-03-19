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

export class UserComponent implements OnInit{
    username: any;
    notes: any;
    geturl: string;
    posturl: string;
    constructor(private http: Http, private route: ActivatedRoute) { 
        this.username = this.route.snapshot.params['username']
        console.log(this.username);
        this.geturl = "http://localhost:5000/notes/"+this.username;
        this.posturl = "http://localhost:5000/post/"+this.username;
    }

    ngOnInit(){
        console.log(this.geturl);
        this.http.get(this.geturl).subscribe(
            data=> {
                console.log(data);
                this.notes=data.text();
            }
        )
    }
    Save(): void{
        console.log('Clicked -- save '+this.notes);
        //this.http.post(this.posturl)
    }
}