import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './_layout/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        HeaderComponent
    ],

    imports: [

        BrowserModule,
        RouterModule.forRoot([
            {

                path: 'home',
                component: HomeComponent,
            },

            {
                path: 'contact',
                component: ContactComponent,

            },

            {
                path: 'about',
                component: AboutComponent,

            },

        ]),
    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
