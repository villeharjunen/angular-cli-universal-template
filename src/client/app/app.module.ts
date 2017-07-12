import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { Observable } from "rxjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { CareerComponent } from './career/career.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

import { NavigationComponent } from './components/navigation/navigation.component';

import { WordpressService } from './services/wordpress.service';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'angular-cli-universal-template' }),
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        CareersComponent,
        CareerComponent,
        PostsComponent,
        PostComponent,
    ],
    providers: [
        WordpressService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
