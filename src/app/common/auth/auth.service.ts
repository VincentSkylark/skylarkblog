import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()

export class AuthService {
    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    private profile: any;

    public userName: string = 'Vincent';

    public setUser(profile) {
        this.profile = profile;
        console.log(this.profile);
    }

    public test(str) {
        console.log("test content", str);
    }
}
