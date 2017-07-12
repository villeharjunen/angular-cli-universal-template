import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from '../client/app/app.module';
import { AppComponent } from '../client/app/app.component';

@NgModule({
    imports: [
        ServerModule,
        AppModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
