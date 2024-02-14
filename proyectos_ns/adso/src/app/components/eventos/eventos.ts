import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos', // Reemplaza 'app-eventos' con el selector correcto si es necesario
  templateUrl: './eventos.html',
  
})
export class EventosComponent implements OnInit {
    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}