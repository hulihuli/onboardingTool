import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthenticationGuard } from "../loginAuth/authGuard";


const triageRoutes: Routes = [
    { path: "", redirectTo: "supervisor", pathMatch: "full" },
    {
        path: "supervisor",
        loadChildren: "./triageSupervisor/triageSupervisor.module#TriageSupervisorModule",
        canActivate: [AuthenticationGuard]
    },
    {
        path: "statistic",
        loadChildren: "./triageStatistic/triageStatistic.module#TriageStatisticModule",
        canActivate: [AuthenticationGuard]
    },
    {
        path: "analysis",
        loadChildren: "./triageAnalysis/triageAnalysis.module#TriageAnalysisModule",
        canActivate: [AuthenticationGuard]
    },
    {
        path: "analysis/:customerEnv/:viewKey",
        loadChildren: "./triageAnalysis/triageAnalysis.module#TriageAnalysisModule",
        canActivate: [AuthenticationGuard]
    },
    {
        path: "report",
        loadChildren: "./triageReport/triageReport.module#TriageReportModule",
        canActivate: [AuthenticationGuard]
    },{
        path: "report/:displayType/:reportTimeSpan",
        loadChildren: "./triageReport/triageReport.module#TriageReportModule",
        canActivate: [AuthenticationGuard]
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
