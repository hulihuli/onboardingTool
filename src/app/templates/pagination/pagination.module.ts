import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { PaginationComponent } from "./pagination.component";
import { SafePipe } from "../../pipe/safeUrlPipe";

@NgModule({
	imports: [
        BrowserAnimationsModule, 
        FormsModule,
        NgxChartsModule,
    ],
    exports: [
        PaginationComponent
    ],
	declarations: [
        PaginationComponent
    ]
})

export class PaginationModule {}