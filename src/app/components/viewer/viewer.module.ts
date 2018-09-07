import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ViewerRoutingModule } from "./viewer-routing.module";
import { ViewerComponent } from "./viewer.component";

import { ViewerService } from "./viewer.service";
import { CommonModule } from "../../../../node_modules/@angular/common";


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      ViewerRoutingModule
    ],
    declarations: [
      ViewerComponent
    ],
    providers: [
      ViewerService
    ]
  })
  
  export class ViewerModule { }