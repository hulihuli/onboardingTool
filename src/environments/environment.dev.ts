import { LogLevel } from "../app/core/enums";

export const environmentDev = {
	serverBaseUrl: "http://stcac-135:9080/api",
	defaultVC: "https://cosmos08.osdinfra.net/cosmos/Knowledge.STCA.prod/",
	defaultCouldPriority: 800,
    logLevel: LogLevel.Trace,
    enableAAD: true,
	adalConfig: {
		tenant: "microsoft.onmicrosoft.com",
		clientId: "31997c92-67a4-43be-b535-049e2f5b9e2c", //registered application's Id (GUID)
		postLogoutRedirectUri: "http://localhost:4200/logout"
	}
};
