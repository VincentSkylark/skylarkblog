import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class AuthService {
    private headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    private profile: any;

    constructor(private http: Http) { }

    public userName: string = 'guest';

    public validToken(token: string) {
        let url: string = environment.API_URL + '/auth/valid';
        let params: URLSearchParams = new URLSearchParams();
        return this.http.post(url, { token: token }, { headers: this.headers })
    }
}
