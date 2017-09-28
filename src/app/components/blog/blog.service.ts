/**
 * Created by vhe on 8/9/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AuthService } from '../../common/auth/auth.service';
import { environment} from '../../../environments/environment';

@Injectable()

export class BlogService {

    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    constructor(private http: Http) { }

    public getBlogSize(query?: object) {
        let url: string = environment.API_URL + '/blogsize';
        return this.http.get(url, { body: query });
    }

    public getBlogs(pageNumber?: number) {
        let url: string = environment.API_URL + '/blog';
        let params: URLSearchParams = new URLSearchParams();
        params.set('pageNumber', pageNumber ? pageNumber.toString() : '1');
        return this.http.get(url, { headers: this.headers, search: params });
    }

    public getPopularBlogs() {
        let url: string = environment.API_URL + '/blog/popular';
        return this.http.get(url, { headers: this.headers });
    }

    public getPastBlogs(startDate, endDate) {
        let url: string = this.API_URL + '/blog/past';
        let params: URLSearchParams = new URLSearchParams();
        
        params.set('startDate', startDate.toString());
        params.set('endDate', endDate.toString());
        return this.http.get(url, { headers: this.headers, search: params });
    }

    public getBlogById(blogId: string) {
        let url: string = environment.API_URL + '/blog/' + blogId;
        let params: URLSearchParams = new URLSearchParams();
        params.set('blogId', blogId.toString());
        return this.http.get(url, { headers: this.headers, search: params });
    }

    public getComment(blogId: string) {
        let url: string = environment.API_URL + '/blog/comment/' + blogId;
        return this.http.get(url, { headers: this.headers });
    }

    public addComment(blogId: string, content: string, name = 'guest') {
        let url: string = environment.API_URL + '/blog/comment/' + blogId;
        let params: URLSearchParams = new URLSearchParams();
        params.set('blogId', blogId);

        return this.http.post(url, { name: name, content: content }, { headers: this.headers })
    }
}
