/// <reference path="../_all.ts" />

module forum {
	export class HomeController {
		private active;

		constructor (
			private $scope: IHomeScope,
			private $cookieStore: ng.cookies.ICookieStoreService,
			private $location: ng.ILocationService
		) {
			this.$scope.vm = this;
			this.active = this.$scope.active = "all";
			this.$scope.username = this.$cookieStore.get("username");
			this.$scope.newVisible = false;
			this.$scope.newTitle = "";
			this.$scope.hasSuccess = false;

			var threads = Storage.getThread();
			this.$scope.listThread = [];

			for(var i=0 ; i<threads.length ; i++) {
				var item: ThreadItem = new ThreadItem(threads[i]);
				this.$scope.listThread.push(item);
			}

			this.$scope.$watch('active', () => this.updateThread(), true);
		}

		logout() {
			this.$cookieStore.remove("username");
			this.$location.path("/login");
		}

		toggleNew() {
			this.$scope.newTitle = "";
			this.$scope.newVisible = this.active = !this.$scope.newVisible;
			this.$scope.hasSuccess = false;
		}

		createThread() {
			var newThread: Thread = new Thread(Thread.nextId(), this.$scope.newTitle, this.$scope.username);
			this.$scope.listThread.push(new ThreadItem(newThread));
			newThread.save();

			this.$scope.hasSuccess = true;
			this.$scope.newVisible = false;
		}

		updateThread() {
			if(this.active == 'all') {
				this.$scope.listThread = [];
				var threads = Storage.getThread();

				for(var i=0 ; i<threads.length ; i++) {
					this.$scope.listThread.push(new ThreadItem(threads[i]));
				}
			} else if(this.active == 'my') {
				this.$scope.listThread = [];
				var threads = Thread.getThreadByUser(this.$scope.username);

				for(var i=0 ; i<threads.length ; i++) {
					this.$scope.listThread.push(new ThreadItem(threads[i]));
				}
			}
		}

		changeActive(to: string) {
			this.$scope.active = this.active = to;
		}
	}
}