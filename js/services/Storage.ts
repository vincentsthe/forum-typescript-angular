/// <reference path="../_all.ts" />

module forum {
	export class Storage {

		private static USER_STORAGE_ID = 'forum-storage-id';
		public static getUser(): User[] {
			return JSON.parse(localStorage.getItem(Storage.USER_STORAGE_ID) || '[]');
		}
		public static putUser(listUser: User[]) {
			localStorage.setItem(Storage.USER_STORAGE_ID, JSON.stringify(listUser));
		}

		private static THREAD_STORAGE_ID = 'forum-thread-storage-id';
		public static getThread() : Thread[] {
			return JSON.parse(localStorage.getItem(Storage.THREAD_STORAGE_ID) || '[]');
		}
		public static putThread(listThread: Thread[]) {
			localStorage.setItem(Storage.THREAD_STORAGE_ID, JSON.stringify(listThread));
		}

		private static POST_STORAGE_ID = 'forum-post-storage-id';
		public static getPost() : Post[] {
			return JSON.parse(localStorage.getItem(Storage.POST_STORAGE_ID) || '[]');
		}
		public static putPost(listPost: Post[]) {
			localStorage.setItem(Storage.POST_STORAGE_ID, JSON.stringify(listPost));
		}

	}
}