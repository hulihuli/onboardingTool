import { NgModule } from "../../../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../../../node_modules/@angular/router";
import { EntityDiffViewerComponent } from "./entityDiffViewer.component";

// routes
export const ROUTES: Routes = [
    { path: '', component: EntityDiffViewerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class EntityDiffViewerRoutingModule { }