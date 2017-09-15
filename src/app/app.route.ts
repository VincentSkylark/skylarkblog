/**
 * Created by vhe on 8/9/2017.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/blog/post/post.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

import { AboutMeComponent } from './components/others/about-me.component';
import { PrivacyComponent } from './components/others/privacy.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blog/:blogId', component: PostComponent },
    { path: 'blog', component: BlogComponent },
    
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },

    { path: 'aboutme', component: AboutMeComponent },
    { path: 'privacy', component: PrivacyComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRouteModule { }
