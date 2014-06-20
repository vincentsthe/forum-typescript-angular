///<reference path="../_all.ts" />

module forum {
	export class Thread {
		constructor(
			public id: number,
			public title: string,
			public author: string
		)
		{ }

		static nextId():number {
			var listThread: Thread[] = Storage.getThread();
			var maks: number = 0;

			for(var i=0 ; i<listThread.length ; i++) {
				if(maks < listThread[i].id) {
					maks = listThread[i].id;
				}
			}

			return maks+1;
		}

		save() {
			var listThread: Thread[] = Storage.getThread();

			listThread.push(this);

			Storage.putThread(listThread);
		}

		static getThreadByUser(username: string) {
			var listThread: Thread[] = Storage.getThread();
			var returnThread: Thread[] = [];

			for(var i=0 ; i<listThread.length ; i++) {
				if(listThread[i].author == username) {
					returnThread.push(listThread[i]);
				}
			}

			return returnThread;
		}

		static getThreadById(threadId: number): Thread {
			var listThread: Thread[] = Storage.getThread();

			for(var i=0 ; i<listThread.length ; i++) {
				if(listThread[i].id == threadId) {
					return listThread[i];
				}
			}

			return null;
		}

		public countPost(): number {
			return 5;
			var listPost: Post[] = Post.getPostByThread(this.id);
			return listPost.length;
		}
	}
}