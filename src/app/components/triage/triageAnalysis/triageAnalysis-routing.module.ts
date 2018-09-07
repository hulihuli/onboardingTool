import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriageAnalysisComponent } from './triageAnalysis.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: TriageAnalysisComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class TriageAnalysisRoutingModule { }