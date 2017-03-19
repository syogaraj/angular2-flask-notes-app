import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

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
    notes: string;
    constructor(private route: ActivatedRoute) { 
        this.username = this.route.snapshot.params['username']
        console.log(this.username);
    }

    ngOnInit(){
        
    }
    Save(): void{
        console.log('Clicked -- save '+this.notes);
    }
}