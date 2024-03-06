import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-acerca-de',
    templateUrl: './acerca de.html',
    styleUrls: ['./acerca de.css']
})
export class AcercaDeComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void {
    }
    onregresar(): void {
        this.router.navigate(["/home"]);
    }
}