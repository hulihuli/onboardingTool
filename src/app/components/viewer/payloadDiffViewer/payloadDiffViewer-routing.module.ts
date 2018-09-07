import { NgModule } from "../../../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../../../node_modules/@angular/router";
import { PayloadDiffViewerComponent } from "./payloadDiffViewer.component";

// routes
export const ROUTES: Routes = [
    { path: '', component: PayloadDiffViewerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class PayloadDiffViewerRoutingModule { }