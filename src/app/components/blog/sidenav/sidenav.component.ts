import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.html',
    styleUrls: ['./sidenav.less']
})

export class SidenavComponent implements OnInit {
    private popularPosts = [];
    date = new Date();
    dateList: Array<Object> = [];

    constructor(private blogService: BlogService, private router: Router) { }

    //generate data list of the past 6 months;
    private generateAchieveList() {
        const year = this.date.getFullYear();
        const month = this.date.getMonth();
        for (let i = 0; i < 6; i++) {
            let startDate = new Date(year, month - i - 1, 1);
            let endDate = new Date(year, month - i, 1);
            this.dateList.push({startDate: startDate, endDate: endDate});
        }
    }

    ngOnInit() {
        this.blogService.getPopularBlogs().subscribe((response) => {
            this.popularPosts = response.json();
        });

        this.generateAchieveList();
    }

}
