/// <reference path="_all.ts" />

require.config({
	paths: {
		jquery:'libs/jquery',
		angular:'libs/angular',
		angularAnimate:'libs/angular-animate.min',
		angularCookies:'libs/angular-cookies.min',
		angularRoute: 'libs/angular-route.min',
		d3: 'libs/d3.min',
		HomeController: 'controller/HomeController',
		LoginController: 'controller/LoginController',
		StatisticController: 'controller/StatisticController',
		ThreadController: 'controller/ThreadController',
		Post: 'models/Post',
		Thread: 'models/Thread',
		ThreadItem: 'models/ThreadItem',
		User: 'models/User',
		Storage: 'services/Storage',
		Application: 'Application'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'd3': {
			exports:'d3'
		},
		'angularRoute': ['angular'],
		'angularCookies': ['angular'],
		'angularAnimate': ['angular'],
		'bootstrap': ['jquery']
	}
});

require(['angular', 'Application', 'HomeController', 'LoginController', 'StatisticController', 'ThreadController'], function(angular) {
	angular.bootstrap(document, ['forum']);
});