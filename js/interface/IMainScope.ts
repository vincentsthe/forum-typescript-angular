/// <reference path="../_all.ts" />

module forum {
	'use strict';

	export interface IMainScope extends ng.IScope {
		vm: forum.Controller;
		newThread: string;
		threads: Thread[];
	}
}