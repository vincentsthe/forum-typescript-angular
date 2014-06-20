/// <reference path="../_all.ts" />

module forum {
	export interface IStatisticScope extends ng.IScope {
		vm: forum.StatisticController;
		textarea: string;
	}
}