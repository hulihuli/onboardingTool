import { NgModule } from "../../../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../../../node_modules/@angular/router";
import { LogoutComponent } from "./logout.component";

// routes
export const ROUTES: Routes = [
    { path: '', component: LogoutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class LogoutRoutingModule { }