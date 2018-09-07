import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewerComponent } from "./viewer.component";

const viewerRoutes: Routes = [
    { path: '', redirectTo: 'entityDiff', pathMatch: 'full' },
    {
        path: "entityDiff",
        loadChildren: './entityDiffViewer/entityDiffViewer.module#EntityDiffViewerModule'
    },
    {
        path: "payloadDiff",
        loadChildren: './payloadDiffViewer/payloadDiffViewer.module#PayloadDiffViewerModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(viewerRoutes)],
    exports: [RouterModule]
})
export class ViewerRoutingModule { }
