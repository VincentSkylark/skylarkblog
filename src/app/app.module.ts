import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRouteModule} from './app.route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModules } from './material.module';

import {AppComponent} from './app.component';
import {FooterComponent} from './common/footer/footer.component';
import {NavbarComponent} from './common/navbar/navbar.component';

import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ContactComponent} from './components/contact/contact.component';


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    AppRouteModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  declarations:[
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    PortfolioComponent,
    ContactComponent

  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule{}
