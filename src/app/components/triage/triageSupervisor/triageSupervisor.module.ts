import { NgModule } from '@angular/core';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { DisplayTypeFilterPipe } from '../../../pipe/displayTypeFilterPipe';
import { ViewStatisticPanelModule } from '../../../templates/viewStatisticPanel/viewStatisticPanel.module';
import { TriageSupervisorRoutingModule } from './triageSupervisor-routing.module';
import { TriageSupervisorComponent } from './triageSupervisor.component';
import { TablePaginationComponent } from '../../../templates/tablePagination/tablePagination.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ViewStatisticPanelModule,
        TriageSupervisorRoutingModule
    ],
    declarations: [
        TriageSupervisorComponent,
        TablePaginationComponent,
        DisplayTypeFilterPipe
    ]
})
export class TriageSupervisorModule { }