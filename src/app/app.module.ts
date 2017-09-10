import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouteModule } from './app.route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightJsModule } from 'angular2-highlight-js';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModules } from './material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogCardComponent } from './components/blog/blogCard/blogCard.component';
import { SidenavComponent } from './components/blog/sidenav/sidenav.component';
import { PostComponent } from './components/blog/post/post.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

import { AboutMeComponent } from './components/others/about-me.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouteModule,
        BrowserAnimationsModule,
        HighlightJsModule,
        FlexLayoutModule,
        MaterialModules
    ],
    declarations: [
        AppComponent,
        FooterComponent,
        NavbarComponent,
        HomeComponent,
        BlogComponent,
        BlogCardComponent,
        SidenavComponent,
        PostComponent,
        PortfolioComponent,
        ContactComponent,
        AboutMeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
