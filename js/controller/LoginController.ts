/// <reference path="../_all.ts" />

 module forum {
 	export class LoginController {
 		constructor (
 			private $scope: ILoginScope,
 			private $cookieStore: ng.cookies.ICookieStoreService,
 			private $location: ng.ILocationService
 		) {
 			this.$cookieStore.remove("username");

 			this.$scope.vm = this;
 			this.$scope.username="";
 			this.$scope.newVisible= false;
 			this.$scope.newUser="";

 			this.$scope.userHasError=false;
 			this.$scope.userHelp="";
 			this.$scope.newHasError=false;
 			this.$scope.newHelp="";
 		}

	 	toggleNew() {
	 		this.$scope.newVisible = !this.$scope.newVisible;
	 	}

	 	registerUser() {
	 		if(User.exist(this.$scope.newUser)) {
	 			this.$scope.newHelp="username already used.";
	 			this.$scope.newHasError = true;
	 		} else {
	 			User.add(this.$scope.newUser);
	 			this.$scope.newUser="";
	 			this.$scope.newHasError = false;
	 			alert("Username successfully registered.");
	 		}
	 	}

	 	login() {
	 		if(!User.exist(this.$scope.username)) {
	 			this.$scope.userHelp="Username not exist";
	 			this.$scope.userHasError=true;
	 		} else {
	 			this.$scope.userHasError=false;
	 			this.$cookieStore.put("username", this.$scope.username);
	 			this.$location.path('/');
	 		}
	 	}
 	}
 }