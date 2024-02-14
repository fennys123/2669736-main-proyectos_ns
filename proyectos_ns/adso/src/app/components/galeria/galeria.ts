import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ns-galeria',
    templateUrl: './galeria.html',
})
export class GaleriaComponent implements OnInit {

    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}