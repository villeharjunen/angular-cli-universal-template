import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent} from './post/post.component';
import { WordpressService } from '../services/wordpress.service';

@NgModule({
    imports: [
        CommonModule,
        PostsRoutingModule,
    ],
    declarations: [
        PostsComponent,
        PostComponent,
    ],
    providers: [
        WordpressService,
    ]
})
export class PostsModule { }
