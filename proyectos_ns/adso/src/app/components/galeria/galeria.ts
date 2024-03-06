import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
    selector: 'ns-galeria',
    templateUrl: './galeria.html',
})
export class GaleriaComponent implements OnInit {
    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    public ngOnInit(): void {
        // ...
    }

    onRegresar(): void {
        this.router.navigate(["/index"]);
    }
}