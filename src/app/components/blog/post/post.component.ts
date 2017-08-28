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
    postId: string;
    blog: object = {tag:[]};
    constructor(private route: ActivatedRoute, private blogService: BlogService) {
        this.postId = route.snapshot.params['blogId'];
    }

    ngOnInit() {
        this.blogService.getBlogById(this.postId).subscribe((response) => {
            this.blog = response.json();
        })
    }
    
}
