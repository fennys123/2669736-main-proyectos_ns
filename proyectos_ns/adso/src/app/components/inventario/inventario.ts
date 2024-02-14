import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-inventario',
    templateUrl: './inventario.html',
    
})
export class InventarioComponent implements OnInit {

    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}