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
            description: 'HTML 5 is the current marjor HTML standard. It is used for creating stastic page or views model with style sheet. Topics on HTML 5 will cover offline web application, multi-threading and local storage.'
        },
        {
            iconUrl: '../../assets/icons/javascript.png',
            name: 'JavaScript',
            description: 'JavaScript is the core technology for web development. It is said any application that can be written in JavaScript, will eventually be written in JavaScript. Topics on Javascript will include changes introduced by EMACScript6, popular tools, asynchronous function, event handling and debugging workflow.'
        },
        {
            iconUrl: '../../assets/icons/nodejs.png',
            name: 'Node.js',
            descirption: 'Node is a JavaScript runtime that uses an event-driven, non-blocking I/O model. Articles about Node.js will display how node is served as either individual application or as a meddle layer between database and client-side application.'
        },
        {
            iconUrl: '../../assets/icons/angularjs.png',
            name: 'angularjs',
            description: 'One of the most popular JavaScript MVW framework developed by Google and an active community. It allows developer to create rich Internet single page application. Topic on this includes introduction of featured fuctionality, common issues with solution, and good practice.'
        }
    ];
    skillset2 = [
        {
            iconUrl: '../../assets/icons/angular.png',
            name: 'angular',
            description: 'Commonly referred as Angular 2+, which is a ground-up rewrite of AngularJS and has many unique qualities. '
        },
        {
            iconUrl: '../../assets/icons/java.png',
            name: 'JAVA',
            description: 'This topic is'
        },
        {
            iconUrl: '../../assets/icons/github.png',
            name: 'Coding',
            description: 'Coding contains various topics '
        },
        {
            iconUrl: '../../assets/icons/thoughts.png',
            name: 'Other Thoughts',
            description: 'This topic indicates skills and thoughts that are closely related with a software developer but not belonging to the field of computer science.'
        }
    ];

}
