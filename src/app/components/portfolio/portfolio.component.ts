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
            link: '',
            description:''
        }
    ];

}
