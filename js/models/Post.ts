/// <reference path="../_all.ts" />

module forum {
	export class Post {
		constructor (
			public threadId,
			public postNumber,
			public author,
			public content
		) {}

		static nextPostNumber(threadId) {
			var counter = 0;
			var listPost = Storage.getPost();

			for(var i=0 ; i<listPost.length ; i++) {
				if(threadId == listPost[i].threadId) {
					counter++;
				}
			}

			return counter+1;
		}

		static getPostByThread(threadId) {
			var listPost = Storage.getPost();
			var returnPost : Post[] = [];

			for(var i=0 ; i<listPost.length ; i++) {
				if(threadId == listPost[i].threadId) {
					returnPost.push(listPost[i]);
				}
			}

			return returnPost;
		}

		save() {
			var listPost = Storage.getPost();
			listPost.push(this);
			Storage.putPost(listPost);
		}
	}
}