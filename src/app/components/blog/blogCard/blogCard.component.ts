/**
 * Created by vhe on 8/9/2017.
 */
import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog.model';
@Component({
    selector: 'blog-card',
    templateUrl: './blogCard.html',
    styleUrls: ['./blogCard.less']
})

export class BlogCardComponent {
    constructor() { }
    @Input() blog;
}
