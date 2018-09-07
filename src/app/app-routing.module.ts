import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthenticationGuard } from "./components/loginAuth/authGuard";

let allRoutes: Routes = [
    { path: "", redirectTo: "triage", pathMatch: "full" },
    {
        path: "triage",
        loadChildren: './components/triage/triage.module#TriageModule'
    },
    {
        path: "dashboard",
        loadChildren: './components/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: "viewer",
        loadChildren: './components/viewer/viewer.module#ViewerModule'
    },
    {
        path: "metric",
        loadChildren: './components/metric/metric.module#MetricModule'
    },
    { 
        path: "login", 
        loadChildren: './components/loginAuth/login/login.module#LoginModule' 
    },
    { 
        path: "logout", 
        loadChildren: './components/loginAuth/logout/logout.module#LogoutModule' 
    },
    { 
        path: "**", 
        loadChildren: './components/trivial/pageNotFound.module#PageNotFoundModule' 
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            allRoutes
            //his outputs each router event that took place during each navigation lifecycle to the browser console
            //{ enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
