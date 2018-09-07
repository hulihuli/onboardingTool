import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthenticationGuard } from "../loginAuth/authGuard";


const triageRoutes: Routes = [
    { path: "", redirectTo: "supervisor", pathMatch: "full" },
    {
        path: "supervisor",
        loadChildren: "./triageSupervisor/triageSupervisor.module#TriageSupervisorModule"
    },
    {
        path: "statistic",
        loadChildren: "./triageStatistic/triageStatistic.module#TriageStatisticModule"
    },
    {
        path: "analysis",
        loadChildren: "./triageAnalysis/triageAnalysis.module#TriageAnalysisModule"
    },
    {
        path: "analysis/:customerEnv/:viewKey",
        loadChildren: "./triageAnalysis/triageAnalysis.module#TriageAnalysisModule"
    },
    {
        path: "report",
        loadChildren: "./triageReport/triageReport.module#TriageReportModule"
    },{
        path: "report/:displayType/:reportTimeSpan",
        loadChildren: "./triageReport/triageReport.module#TriageReportModule"
    }
];

@NgModule({
	imports: [
		RouterModule.forChild(
			triageRoutes
			//his outputs each router event that took place during each navigation lifecycle to the browser console
			//{ enableTracing: true } // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class TriageRoutingModule {}
