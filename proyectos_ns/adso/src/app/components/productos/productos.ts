import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";

@Component({
    selector: 'ns-productos',
    templateUrl: './productos.html',
    moduleId: import.meta.url
})
export class ProductosComponent implements OnInit {

    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}