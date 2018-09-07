import { NgModule } from "../../../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../../../node_modules/@angular/router";
import { LoginComponent } from "./login.component";

// routes
export const ROUTES: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class LoginRoutingModule { }