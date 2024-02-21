import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-index',
    templateUrl: './index.html',
})
export class IndexComponent implements OnInit {
    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    public ngOnInit(): void {

    }
}

