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

export class BlogComponent implements OnInit {

    constructor(private blogService: BlogService) {
    }

    blogs: object ;

    pageModel = {
        length: 100,
        pageSize: 10,
        pageSizeOptions:[5, 10, 25]
    }

    ngOnInit() {
     
        this.blogService.getBlogs().subscribe((response) => {
            this.blogs = response.json();
        });
    }
    
}
