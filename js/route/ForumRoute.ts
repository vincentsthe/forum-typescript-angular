/// <reference path="../_all.ts" />

module forum {
	export class ForumRoute {
		constructor(private $routeProvider) {
			this.$routeProvider.
		    	when('/', {
		        	templateUrl: 'partials/home.html',
		        	controller: 'Controller'
		      	}).
		      	otherwise({
		      		redirectTo: '/'
		      	});
		}
	}
}