/// <reference path="../_all.ts" />

module forum {
	export interface IHomeScope extends ng.IScope {
		vm: forum.HomeController;
		listThread: ThreadItem[];
		active: string;
		counter: string;
		username: string;
		newVisible: boolean;
		newTitle: string;
		hasSuccess: boolean;
	}
}