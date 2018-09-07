import { NgModule } from '@angular/core';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { NgxChartsModule } from '../../../../../node_modules/@swimlane/ngx-charts';
import { TriageStatistictRoutingModule } from './triageStatistic-routing.module';
import { TriageStatisticComponent } from './triageStatistic.component';

@NgModule({
    imports: [
        CommonModule,
        NgxChartsModule,
        TriageStatistictRoutingModule
    ],
    declarations: [
        TriageStatisticComponent
    ]
})
export class TriageStatisticModule { }