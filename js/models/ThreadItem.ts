/// <reference path="../_all.ts" />

module forum {
	export class ThreadItem {
		public id: number;
		public title: string;
		public author: string;
		public reply: number;

		constructor(thread: Thread) {
			this.id = thread.id;
			this.title = thread.title;
			this.author = thread.author;
			this.reply = Post.getPostByThread(this.id).length;
		}
	}
}