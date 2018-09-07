import { NgModule } from "../../../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../../../node_modules/@angular/router";
import { OnboardingTfsMetricComponent } from "./onboardingTfsMetric.component";

// routes
export const ROUTES: Routes = [
    { path: '', component: OnboardingTfsMetricComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class OnboardingTfsMetricRoutingModule { }