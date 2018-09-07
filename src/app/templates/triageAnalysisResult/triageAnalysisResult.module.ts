import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { TriageAnalysisResultComponent } from "./triageAnalysisResult.component";
import { SafePipe } from "../../pipe/safeUrlPipe";
import { DiffViewerTableModule } from "../diffViewerTable/diffViewerTable.module";

@NgModule({
	imports: [
        FormsModule,
        NgxChartsModule,
        DiffViewerTableModule
    ],
    exports: [
        SafePipe,
        TriageAnalysisResultComponent
    ],
	declarations: [
        SafePipe,
        TriageAnalysisResultComponent
    ]
})

export class TriageAnalysisResultModule {}