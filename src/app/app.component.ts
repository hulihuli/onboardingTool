import { Component, OnDestroy, OnInit } from "@angular/core";
import { AdalService } from "adal-angular4";
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";

import { User } from "./core/common/authUser";

//import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { BaseComponent } from "./components/common/base.component";
import { environment } from "../environments/environment";

@Component({
	selector: "my-app",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
	private sub: any;
	user: User;

	constructor(
		//private slimLoader: SlimLoadingBarService,
		private router: Router,
		private adalService: AdalService
	) {
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

        //this.user = new User("Li Hu (Beyondsoft Corporation)", "v-lihu@microsoft.com", false);
        this.user = new User();
		if (this.adalService.userInfo.authenticated) {
			//this.logger.info("authenticated user info", this.adalService.userInfo);
			let profile = this.adalService.userInfo.profile;
			this.user = new User(profile.name, profile.upn, this.adalService.userInfo.authenticated);
		}
	}

	// Logout Method
	logout() {
		if (this.user.authenticated) {
			this.adalService.logOut();
			this.adalService.clearCache();
		}
	}

	ngOnDestroy(): any {
		this.sub.unsubscribe();
	}

	// startLoading() {
	//     this.slimLoader.start(() => {
	//         this.logger.info('Loading complete');
	//     });
	// }

	// stopLoading() {
	//     this.slimLoader.stop();
	// }

	// completeLoading() {
	//     this.slimLoader.complete();
	// }
}
