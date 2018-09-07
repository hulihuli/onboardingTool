import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdalService } from "adal-angular4";
import { BaseComponent } from "../../common/base.component";
import { environment } from "../../../../environments/environment";

@Component({
	selector: "login",
	templateUrl: "./login.component.html"
})
export class LoginComponent extends BaseComponent implements OnInit {
	constructor(private route: ActivatedRoute, private router: Router, private adalService: AdalService) {
        super();
        if (environment.enableAAD) {
            this.adalService.init(environment.adalConfig);
        }
	}

	ngOnInit() {
        if (environment.enableAAD) {
            //don't put handleWindowCallback with init, it may cause auth error when call authed web api
            // Handle callback if this is a redirect from Azure
		    this.adalService.handleWindowCallback();
        }
		this.authenticateUser();
	}

	authenticateUser() {
		let returnUrl: string = this.route.snapshot.queryParams["returnUrl"] || "/";

		if (this.adalService.userInfo.authenticated) {
			this.router.navigate([returnUrl]);
		} else {
			this.adalService.login();
		}
	}
}
