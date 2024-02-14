import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'ns-registro',
    templateUrl: './registro.html',
    styleUrls: ['./registro.css']
})
export class RegistrosComponent implements OnInit {

    constructor(private router: Router) {
        // Use the component constructor to inject providers.

    }
    public ngOnInit(): void {

    }
}