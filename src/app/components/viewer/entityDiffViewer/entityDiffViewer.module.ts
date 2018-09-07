import { NgModule } from '@angular/core';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { FormsModule } from '../../../../../node_modules/@angular/forms';

import { EntityDiffViewerRoutingModule } from './entityDiffViewer-routing.module';
import { EntityDiffViewerComponent } from './entityDiffViewer.component';
import { DiffViewerTableModule } from '../../../templates/diffViewerTable/diffViewerTable.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DiffViewerTableModule,
        EntityDiffViewerRoutingModule
    ],
    declarations: [
        EntityDiffViewerComponent
    ]
})
export class EntityDiffViewerModule { }