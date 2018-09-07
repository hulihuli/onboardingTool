import { NgModule } from '@angular/core';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { OnboardingTfsMetricRoutingModule } from './onboardingTfsMetric-routing.module';
import { OnboardingTfsMetricComponent } from './onboardingTfsMetric.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OnboardingTfsMetricRoutingModule
    ],
    declarations: [
        OnboardingTfsMetricComponent
    ]
})
export class OnboardingTfsMetricModule { }