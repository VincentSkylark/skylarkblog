/**
 * Created by vhe on 8/9/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()

export class BlogService {

    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    private API_URL: string;

    constructor(private http: Http) {
        this.API_URL = 'http://localhost:3000/api';
    }

    public getBlogs(pageNumber?: number) {
        let url: string = this.API_URL + '/blog';
        let params: URLSearchParams = new URLSearchParams();
        params.set('pageNumber', pageNumber ? pageNumber.toString() : '1');
        return this.http.get(url, { headers: this.headers, search: params });
    }

    public getBlogById(blogId: string) {
        let url: string = this.API_URL + '/blog/' + blogId;
        let params: URLSearchParams = new URLSearchParams();
        params.set('blogId', blogId.toString());
        return this.http.get(url, { headers: this.headers, search: params });
    }

    public addComment(blogId: number, author: string, comment: string) {

    }
}
