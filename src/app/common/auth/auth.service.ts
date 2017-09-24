import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()

export class AuthService {
    private headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    private profile: any;
    private API_URL: string;

    constructor(private http: Http) {
        this.API_URL = 'http://localhost:3000/api';
    }

    public userName: string = 'guest';

    public validToken(token: string) {
        let url: string = this.API_URL + '/auth/valid';
        let params: URLSearchParams = new URLSearchParams();
        return this.http.post(url, { token: token }, { headers: this.headers })
    }
}
