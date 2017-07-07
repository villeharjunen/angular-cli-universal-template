import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { Observable } from "rxjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { WordpressService } from './services/wordpress.service';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'application-name' }),
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
    ],
    providers: [
        WordpressService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
