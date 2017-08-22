/**
 * Created by vhe on 8/9/2017.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [],
    declarations: [BlogComponent, SidenavComponent, PostComponent]
})

export class BlogModule { }
