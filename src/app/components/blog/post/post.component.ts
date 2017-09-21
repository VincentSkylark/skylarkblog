/**
 * Created by vhe on 8/9/2017.
 */
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
    selector: 'post',
    templateUrl: './post.html',
    styleUrls: ['./post.less'],
    providers: [BlogService]
})

export class PostComponent implements OnInit {
    blogId: string;
    blog: object = {tag:[]};
    constructor(private route: ActivatedRoute, private blogService: BlogService) {
        this.blogId = route.snapshot.params['blogId'];
    }

    ngOnInit() {
        this.blogService.getBlogById(this.blogId).subscribe((response) => {
            this.blog = response.json();
        });
        this.blogService.addComment(this.blogId, "Test comment", "bot x")
            .subscribe((response) => {
                console.log('add comment', response.json());
            });
    }
    
}
