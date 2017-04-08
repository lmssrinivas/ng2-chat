/**
 * Created by mlingolu on 9/24/16.
 */

import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule { }