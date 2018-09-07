import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CommonModule } from '../../../../node_modules/@angular/common';

//routes
import { TriageRoutingModule } from './triage-routing.module';

//component
import { TriageComponent } from './triage.component';

//service
import { TriageService } from './triage.service';

//plugin
//import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UiSwitchModule,
    TriageRoutingModule,
    //SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    TriageComponent
  ],
  providers: [
    TriageService
  ]
})

export class TriageModule { }
