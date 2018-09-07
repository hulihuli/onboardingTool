import { NgModule } from '@angular/core';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

import { PayloadDiffViewerRoutingModule } from './payloadDiffViewer-routing.module';
import { PayloadDiffViewerComponent } from './payloadDiffViewer.component';
import { PayLoadDiffViewerTableModule } from '../../../templates/payloadDiffViewTable/payloadDiffViewTable.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PayLoadDiffViewerTableModule,
        PayloadDiffViewerRoutingModule
    ],
    declarations: [
        PayloadDiffViewerComponent
    ]
})
export class PayloadDiffViewerModule { }