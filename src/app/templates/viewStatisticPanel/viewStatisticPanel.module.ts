import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ViewStatisticPanelComponent } from "./viewStatisticPanel.component";

@NgModule({
	imports: [
        FormsModule,
        NgxChartsModule,
    ],
    exports: [
        ViewStatisticPanelComponent
    ],
	declarations: [
        ViewStatisticPanelComponent
    ]
})

export class ViewStatisticPanelModule {}