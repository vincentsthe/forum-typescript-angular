/// <reference path="../_all.ts" />
var forum;
(function (forum) {
    var HomeController = (function () {
        function HomeController($scope, $cookieStore, $location) {
            var _this = this;
            this.$scope = $scope;
            this.$cookieStore = $cookieStore;
            this.$location = $location;
            this.$scope.vm = this;
            this.active = this.$scope.active = "all";
            this.$scope.username = this.$cookieStore.get("username");
            this.$scope.newVisible = false;
            this.$scope.newTitle = "";
            this.$scope.hasSuccess = false;

            var threads = forum.Storage.getThread();
            this.$scope.listThread = [];

            for (var i = 0; i < threads.length; i++) {
                var item = new forum.ThreadItem(threads[i]);
                this.$scope.listThread.push(item);
            }

            this.$scope.$watch('active', function () {
                return _this.updateThread();
            }, true);
        }
        HomeController.prototype.logout = function () {
            this.$cookieStore.remove("username");
            this.$location.path("/login");
        };

        HomeController.prototype.toggleNew = function () {
            this.$scope.newTitle = "";
            this.$scope.newVisible = this.active = !this.$scope.newVisible;
            this.$scope.hasSuccess = false;
        };

        HomeController.prototype.createThread = function () {
            var newThread = new forum.Thread(forum.Thread.nextId(), this.$scope.newTitle, this.$scope.username);
            this.$scope.listThread.push(new forum.ThreadItem(newThread));
            newThread.save();

            this.$scope.hasSuccess = true;
            this.$scope.newVisible = false;
        };

        HomeController.prototype.updateThread = function () {
            if (this.active == 'all') {
                this.$scope.listThread = [];
                var threads = forum.Storage.getThread();

                for (var i = 0; i < threads.length; i++) {
                    this.$scope.listThread.push(new forum.ThreadItem(threads[i]));
                }
            } else if (this.active == 'my') {
                this.$scope.listThread = [];
                var threads = forum.Thread.getThreadByUser(this.$scope.username);

                for (var i = 0; i < threads.length; i++) {
                    this.$scope.listThread.push(new forum.ThreadItem(threads[i]));
                }
            }
        };

        HomeController.prototype.changeActive = function (to) {
            this.$scope.active = this.active = to;
        };
        return HomeController;
    })();
    forum.HomeController = HomeController;
})(forum || (forum = {}));
