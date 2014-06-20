/// <reference path="../_all.ts" />
var forum;
(function (forum) {
    var LoginController = (function () {
        function LoginController($scope, $cookieStore, $location) {
            this.$scope = $scope;
            this.$cookieStore = $cookieStore;
            this.$location = $location;
            this.$cookieStore.remove("username");

            this.$scope.vm = this;
            this.$scope.username = "";
            this.$scope.newVisible = false;
            this.$scope.newUser = "";

            this.$scope.userHasError = false;
            this.$scope.userHelp = "";
            this.$scope.newHasError = false;
            this.$scope.newHelp = "";
        }
        LoginController.prototype.toggleNew = function () {
            this.$scope.newVisible = !this.$scope.newVisible;
        };

        LoginController.prototype.registerUser = function () {
            if (forum.User.exist(this.$scope.newUser)) {
                this.$scope.newHelp = "username already used.";
                this.$scope.newHasError = true;
            } else {
                forum.User.add(this.$scope.newUser);
                this.$scope.newUser = "";
                this.$scope.newHasError = false;
                alert("Username successfully registered.");
            }
        };

        LoginController.prototype.login = function () {
            if (!forum.User.exist(this.$scope.username)) {
                this.$scope.userHelp = "Username not exist";
                this.$scope.userHasError = true;
            } else {
                this.$scope.userHasError = false;
                this.$cookieStore.put("username", this.$scope.username);
                this.$location.path('/');
            }
        };
        return LoginController;
    })();
    forum.LoginController = LoginController;
})(forum || (forum = {}));
