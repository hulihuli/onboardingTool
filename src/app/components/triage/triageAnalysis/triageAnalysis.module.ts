import { NgModule } from '@angular/core';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

import { JobPanelModule } from '../../../templates/jobPanel/jobPanel.module';
import { TriageAnalysisResultModule } from '../../../templates/triageAnalysisResult/triageAnalysisResult.module';
import { TriageAnalysisRoutingModule } from './triageAnalysis-routing.module';
import { TriageAnalysisComponent } from './triageAnalysis.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        JobPanelModule,
        TriageAnalysisResultModule,
        TriageAnalysisRoutingModule
    ],
    declarations: [
        TriageAnalysisComponent
    ]
})
export class TriageAnalysisModule { }