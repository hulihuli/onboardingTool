import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; //ngModel
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "../../../../node_modules/@angular/common/http";
//routes
import { MetricService } from "./metric.service";
import { ExcelService } from "../common/excel.service";
import { CommonModule } from "../../../../node_modules/@angular/common";
import { MetricRoutingModule } from "./metric-routing.module";
import { MetricComponent } from "./metric.component";

@NgModule({
	imports: [
        CommonModule,
		FormsModule,
        HttpModule,
        HttpClientModule,
		MetricRoutingModule
		//SlimLoadingBarModule.forRoot()
	],
	declarations: [
        MetricComponent
    ],
	providers: [
        MetricService,
        ExcelService
    ]
})
export class MetricModule {}
