import { NgModule } from "../../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../../node_modules/@angular/router";
import { PageNotFoundComponent } from "./pageNotFound.component";

// routes
export const ROUTES: Routes = [
    { path: '', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class PageNotFoundRoutingModule { }