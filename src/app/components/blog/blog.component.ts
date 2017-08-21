/**
 * Created by vhe on 8/9/2017.
 */
import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
    selector: 'blog',
    templateUrl: './blog.html',
    styleUrls: ['./blog.less'],
    providers: [BlogService]
})

export class BlogComponent {
    constructor() { }

}
