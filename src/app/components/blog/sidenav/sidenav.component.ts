import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.html',
    styleUrls: ['./sidenav.less']
})

export class SidenavComponent implements OnInit {
    private popularPosts = [];
    date = new Date();
    dateList: Array<Date> = [];

    constructor(private blogService: BlogService) { }

    private generateAchieveList() {
        const year = this.date.getFullYear();
        const month = this.date.getMonth();
        for (let i = 0; i < 6; i++) {
            let date = new Date(year, month - i, 1);
            this.dateList.push(date);
        }
    }

    ngOnInit() {
        this.blogService.getPopularBlogs().subscribe((response) => {
            this.popularPosts = response.json();
        });

        this.generateAchieveList();
    }

}
