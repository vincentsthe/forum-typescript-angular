/// <reference path="../_all.ts" />
var forum;
(function (forum) {
    var ThreadController = (function () {
        function ThreadController($scope, $location, $cookieStore, $routeParams) {
            this.$scope = $scope;
            this.$location = $location;
            this.$cookieStore = $cookieStore;
            this.$routeParams = $routeParams;
            this.$scope.vm = this;
            this.$scope.thread = forum.Thread.getThreadById(this.$routeParams.threadId);
            this.$scope.listPost = forum.Post.getPostByThread(this.$scope.thread.id);
            this.$scope.newContent = "";
        }
        ThreadController.prototype.post = function () {
            var newPost = new forum.Post(this.$scope.thread.id, forum.Post.nextPostNumber(this.$scope.thread.id), this.$cookieStore.get("username"), this.$scope.newContent);
            newPost.save();
            this.$scope.listPost.push(newPost);
            this.$scope.newContent = "";
        };
        return ThreadController;
    })();
    forum.ThreadController = ThreadController;
})(forum || (forum = {}));
