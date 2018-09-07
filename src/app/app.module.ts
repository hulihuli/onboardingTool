import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; //ngModel
import { AdalService, AdalGuard } from "adal-angular4";
import { AngularWebStorageModule } from "../../node_modules/angular-web-storage";
import { CommonModule } from "../../node_modules/@angular/common";
import { BrowserModule } from "../../node_modules/@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//routes
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//plugins
//import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'

import { AuthenticationGuard } from "./components/loginAuth/authGuard";


@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AngularWebStorageModule,
        AppRoutingModule
        //SlimLoadingBarModule.forRoot()
    ],
    declarations: [AppComponent],
    providers: [AdalService, AdalGuard, AuthenticationGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
