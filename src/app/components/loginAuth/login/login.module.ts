import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AdalService, AdalGuard } from '../../../../../node_modules/adal-angular4';
import { AuthenticationGuard } from '../authGuard';

@NgModule({
    imports: [
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [AdalService, AdalGuard, AuthenticationGuard]
})
export class LoginModule { }