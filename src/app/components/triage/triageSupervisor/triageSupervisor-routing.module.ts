import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriageSupervisorComponent } from './triageSupervisor.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: TriageSupervisorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class TriageSupervisorRoutingModule { }