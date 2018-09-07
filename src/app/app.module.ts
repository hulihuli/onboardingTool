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

import { AuthenticationGuard } from "./components/loginAuth/authGuard";
import { AutofocusDirective } from "./components/triage/autofocus.diretive";
import { FilterPipe } from "./pipe/FilterPipe";


@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AngularWebStorageModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, AutofocusDirective, FilterPipe],
    providers: [AdalService, AdalGuard, AuthenticationGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
