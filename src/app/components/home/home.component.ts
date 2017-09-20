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
    skillset = [
        [{
            iconUrl: '../../assets/icons/html_5.png',
            name: 'HTML 5',
            description: 'HTML 5 is the current marjor HTML standard. It is used for creating stastic page or views model with style sheet. Topics on HTML 5 will include offline web application, multi-threading and local storage.'
        },
        {
            iconUrl: '../../assets/icons/javascript.png',
            name: 'JavaScript',
            description: 'JavaScript is the core technology for web development.Topics on Javascript will include EMACScript6 features, popular tools, asynchronous function, event handling and debugging workflow.'
        }],
        [{
            iconUrl: '../../assets/icons/nodejs.png',
            name: 'Node.js',
            description: 'Node is a JavaScript runtime that uses an event-driven, non-blocking I/O model. Topic on Node.js will include static file server, OAuth 2 authentication, express, API middleware.'
        },
        {
            iconUrl: '../../assets/icons/angularjs.png',
            name: 'Angularjs',
            description: 'One of the most popular JavaScript MVW framework developed by Google and an active community. Topic on this includes Angularjs featured fuctionality, common issues with solution, and good practice.'
        }],
        [{
            iconUrl: '../../assets/icons/angular.png',
            name: 'Angular',
            description: 'Commonly referred as Angular 2+, which is a ground-up rewrite of AngularJS and has many unique qualities. Topic on Angular includes TypeScript, fetaures and migration from angularjs.'
        },
        {
            iconUrl: '../../assets/icons/java.png',
            name: 'JAVA',
            description: 'Content will discuss JAVA as OOP programming language, together with beginner level topics on common algorithms and data structures as the supplement material in preparation for full-stack developing.'
        }],
        [{
            iconUrl: '../../assets/icons/github.png',
            name: 'Coding',
            description: 'This topic includes general coding skills and tips like documentation, defensive programming, design pattern, coding styles and system development life cycle.'
        },
        {
            iconUrl: '../../assets/icons/thoughts.png',
            name: 'Other Thoughts',
            description: 'This topic indicates skills and thoughts that are closely related with a software developer but not belonging to the field of computer science. It is generally "everything else".'
        }]
    ];

}
