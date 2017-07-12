import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { CareersComponent } from './careers/careers.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'posts/:slug',
        component: PostComponent
    },
    {
        path: 'careers',
        component: CareersComponent
    },
    {
        path: 'careers/:slug',
        component: CareerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            // { enableTracing: true } // uncomment for router debugging
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
