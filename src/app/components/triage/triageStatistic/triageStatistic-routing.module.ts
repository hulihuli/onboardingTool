import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriageStatisticComponent } from './triageStatistic.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: TriageStatisticComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class TriageStatistictRoutingModule { }