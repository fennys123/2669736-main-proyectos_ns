import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'ns-registro',
    templateUrl: './registro.html',
    styleUrls: ['./registro.css']
})
export class RegistrosComponent implements OnInit {
    nombre: string;
    email: string;
    password: string;
    fechaNacimiento: Date;
    telefono: string;
    mayorEdad: boolean;

    constructor(private router: Router) {
        // Use the component constructor to inject providers.

    }
    public ngOnInit(): void {

    }

    onRegistro(): void {
        this.router.navigate(["/index"]);
    }

    onLogin(): void {
        this.router.navigate(["/login"]);
    }
}