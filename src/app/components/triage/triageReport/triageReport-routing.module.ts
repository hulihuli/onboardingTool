import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriageReportComponent } from './triageReport.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: TriageReportComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class TriageReportRoutingModule { }