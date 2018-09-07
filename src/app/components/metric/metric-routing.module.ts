import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const reportRoutes: Routes = [
    { path: "", redirectTo: "onboardingTfs", pathMatch: "full" },
    { 
        path: 'onboardingTfs', 
        loadChildren: './onboardingTfsMetric/onboardingTfsMetric.module#OnboardingTfsMetricModule' 
    }
];

@NgModule({
    imports: [RouterModule.forChild(reportRoutes)],
    exports: [RouterModule]
})
export class MetricRoutingModule { }
