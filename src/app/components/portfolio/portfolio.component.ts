/**
 * Created by vhe on 8/9/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.less']
})

export class PortfolioComponent {
    projects = [
        {
            title: 'Skylark Blog',
            link: 'https://github.com/VincentSkylark/skylarkBlog',
            introduction:'MEAN stack blog'
        },
        {
            title: 'Code Escape',
            link: 'https://github.com/VincentSkylark/CodeEscape',
            introduction: 'Stringify code for blog post.'
        },
        {
            title: 'Blog CMS',
            link: 'N/A',
            introduction: 'Content management system for mongodb.'
        }
    ];

}
