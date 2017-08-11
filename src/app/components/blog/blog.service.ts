/**
 * Created by vhe on 8/9/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()

export class BlogService{

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  private API_URL: string;

  constructor(private http: Http){
    this.API_URL = 'http://localhost:3000/api/blog' ;
  }

  public get() {


  }
}
