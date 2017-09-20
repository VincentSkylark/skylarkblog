/**
 * Created by vhe on 8/9/2017.
 */
import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

declare const gapi: any;

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.less'],
    providers: [AuthService]
})

export class NavbarComponent implements AfterViewInit {
    auth2: any;
    constructor(private authService: AuthService) { }

    private googleLoginInit() {
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
                client_id: '80023736792-s4d6r6oijv22p3cjce3o6gj0u949j5fn.apps.googleusercontent.com',
                cookiepolicy: 'single_host_orign',
                scope: 'profile email'
            });
            this.attachSignin(document.getElementById('g-signin'));
        });
    }

    private attachSignin(element) {
        let self = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {
                self.authService.setUser(googleUser.getBasicProfile());
                //success
            }, function (error) {
                //error handling
            });
    }

    ngAfterViewInit() {
        this.googleLoginInit();
        this.authService.test("connection succeed");
    }

}
