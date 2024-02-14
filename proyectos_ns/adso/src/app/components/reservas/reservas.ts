import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reservas', // Reemplaza 'app-reservas' con el selector correcto si es necesario
    templateUrl: './reservas.html',
})
export class ReservasComponent implements OnInit {

    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
