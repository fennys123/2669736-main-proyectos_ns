import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    constructor(private router: Router) {
        // Use the component constructor to inject providers
    }

    public ngOnInit(): void {
    }
    onLogin(): void {
        this.router.navigate(['/index']);
    }

    onForgotPassword(): void {
        this.router.navigate(['/forgot-password']);
    }

}