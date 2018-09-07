import { NgModule } from '@angular/core';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { NgxMyDatePickerModule } from '../../../../../node_modules/ngx-mydatepicker';
import { NgxChartsModule } from '../../../../../node_modules/@swimlane/ngx-charts';

import { ReportViewsDetailModal } from '../../../templates/reportViewsDetailModal/reportViewsDetailModal.module';
import { TriageReportRoutingModule } from './triageReport-routing.module';
import { TriageReportComponent } from './triageReport.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxChartsModule,
        NgxMyDatePickerModule.forRoot(),
        ReportViewsDetailModal,
        TriageReportRoutingModule
    ],
    declarations: [
        TriageReportComponent
    ]
})
export class TriageReportModule { }