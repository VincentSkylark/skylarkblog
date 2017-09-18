/**
 * Created by vhe on 8/9/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.less']
})

export class HomeComponent {
    skillset1 = [
        {
            iconUrl: '../../assets/icons/html_5.png',
            name: 'HTML 5',
            description: 'sample'
        },
        {
            iconUrl: '../../assets/icons/javascript.png',
            name: 'JavaScript',
            description: ''
        },
        {
            iconUrl: '../../assets/icons/nodejs.png',
            name: 'Node.js',
            descirption: ''
        },
        {
            iconUrl: '../../assets/icons/angularjs.png',
            name: 'angularjs',
            description: 'sample'
        }
    ];
    skillset2 = [
        {
            iconUrl: '../../assets/icons/angular.png',
            name: 'angular',
            description: 'sample'
        },
        {
            iconUrl: '../../assets/icons/java.png',
            name: 'JAVA',
            description: 'angularjs Info'
        },
        {
            iconUrl: '../../assets/icons/github.png',
            name: 'Coding',
            description: 'angular Info'
        },
        {
            iconUrl: '../../assets/icons/thoughts.png',
            name: 'Other Thoughts',
            description: 'angular Info'
        }
    ];

}
