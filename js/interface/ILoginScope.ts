/// <reference path="../_all.ts" />

module forum {
	export interface ILoginScope extends ng.IScope {
		vm: forum.LoginController;
		username: string;
		userHasError: boolean;
		userHelp: string;
		newUser: string;
		newVisible: boolean;
		newHelp: string;
		newHasError: boolean;
	}
}