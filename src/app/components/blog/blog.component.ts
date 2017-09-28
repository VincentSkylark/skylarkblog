/**
 * Created by vhe on 8/9/2017.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { BlogService } from './blog.service';


@Component({
    selector: 'blog',
    templateUrl: './blog.html',
    styleUrls: ['./blog.less'],
    providers: [BlogService]
})

export class BlogComponent implements OnInit {

    constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) {
    }

    blogs: object;

    pageModel = {
        length: 15,
        pageSize: 15
    };

    pageChange(evt) {
        // pageIndex is 0 based, pageNumber for api is 1 based
        this.blogService.getBlogs(evt.pageIndex + 1).subscribe((response) => {
            this.blogs = response.json();
        });
    }


    ngOnInit() {
        this.blogService.getBlogSize().subscribe((response) => {
            this.pageModel.length = response.type;
        });

        this.route.queryParams.subscribe((params) => {
            if (params.startDate && params.endDate) {
                this.blogService.getPastBlogs(params.startDate, params.endDate).subscribe((response) => {
                    this.blogs = response.json();
                });

            } else {
                this.blogService.getBlogs().subscribe((response) => {
                    this.blogs = response.json();
                });
            }
        });
        
    }

}
