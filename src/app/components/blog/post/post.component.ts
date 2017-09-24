/**
 * Created by vhe on 8/9/2017.
 */
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { AuthService } from '../../../common/auth/auth.service';

@Component({
    selector: 'post',
    templateUrl: './post.html',
    styleUrls: ['./post.less'],
    providers: [BlogService]
})

export class PostComponent implements OnInit {
    blogId: string;
    blog: object = { tag: [] };
    comments = [];

    constructor(private route: ActivatedRoute, private blogService: BlogService, private authService: AuthService) {
        this.blogId = route.snapshot.params['blogId'];
    }

    private getComment() {
        this.blogService.getComment(this.blogId).subscribe((response) => {
            let data = response.json();
            this.comments = data[0].comments;
        });
    }

    private addComment(comment: string) {
        this.blogService.addComment(this.blogId, comment, this.authService.userName).subscribe((response) => {
            this.getComment();
        }, (err) => {
            alert("Please login to leave a comment.");
        });
    }

    ngOnInit() {
        this.blogService.getBlogById(this.blogId).subscribe((response) => {
            this.blog = response.json();
        });

        this.getComment();

    }

}
