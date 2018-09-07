import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pageNotFound.component';
import { PageNotFoundRoutingModule } from './pageNotFound-routing.module';

@NgModule({
    imports: [
        PageNotFoundRoutingModule
    ],
    declarations: [
        PageNotFoundComponent
    ]
})
export class PageNotFoundModule { }