/**
 * Created by vhe on 8/9/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppRouteModule } from '../../app.route';
import { MaterialModules } from '../../material.module';


import { BlogComponent } from './blog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BlogCardComponent } from './blogCard/blogCard.component';

@NgModule({
    imports: [BrowserModule, FlexLayoutModule, FormsModule, AppRouteModule, MaterialModules],
    declarations: [BlogComponent, SidenavComponent, BlogCardComponent]
})

export class BlogModule { }
