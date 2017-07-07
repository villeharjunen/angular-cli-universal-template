import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'posts',
        loadChildren: './posts/posts.module#PostsModule'
    },
    {
        path: 'careers',
        loadChildren: './careers/careers.module#CareersModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            // { enableTracing: true } // uncomment for router debug
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
