/// <reference path="../_all.ts" />

module forum {
	export class ThreadController {
		constructor (
			private $scope: IThreadScope,
			private $location: ng.ILocationService,
			private $cookieStore: ng.cookies.ICookieStoreService,
			private $routeParams
		) {
			this.$scope.vm = this;
			this.$scope.thread = Thread.getThreadById(this.$routeParams.threadId);
			this.$scope.listPost = Post.getPostByThread(this.$scope.thread.id);
			this.$scope.newContent = "";
		}

		post() {
			var newPost: Post = new Post(this.$scope.thread.id, Post.nextPostNumber(this.$scope.thread.id), this.$cookieStore.get("username"), this.$scope.newContent);
			newPost.save();
			this.$scope.listPost.push(newPost);
			this.$scope.newContent = "";
		}
	}
}