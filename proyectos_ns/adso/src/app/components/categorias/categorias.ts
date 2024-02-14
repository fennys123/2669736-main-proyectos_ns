import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.html',
})
export class CategoriasComponent implements OnInit {
    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // Your initialization logic here
    }
}