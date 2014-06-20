/// <reference path="../_all.ts" />

module forum {
	export interface IThreadScope extends ng.IScope {
		vm: forum.ThreadController;
		listPost: Post[];
		thread: Thread;
		newContent: string;
	}
}