/// <reference path="../_all.ts" />
var forum;
(function (forum) {
    var Storage = (function () {
        function Storage() {
        }
        Storage.getUser = function () {
            return JSON.parse(localStorage.getItem(Storage.USER_STORAGE_ID) || '[]');
        };
        Storage.putUser = function (listUser) {
            localStorage.setItem(Storage.USER_STORAGE_ID, JSON.stringify(listUser));
        };

        Storage.getThread = function () {
            return JSON.parse(localStorage.getItem(Storage.THREAD_STORAGE_ID) || '[]');
        };
        Storage.putThread = function (listThread) {
            localStorage.setItem(Storage.THREAD_STORAGE_ID, JSON.stringify(listThread));
        };

        Storage.getPost = function () {
            return JSON.parse(localStorage.getItem(Storage.POST_STORAGE_ID) || '[]');
        };
        Storage.putPost = function (listPost) {
            localStorage.setItem(Storage.POST_STORAGE_ID, JSON.stringify(listPost));
        };
        Storage.USER_STORAGE_ID = 'forum-storage-id';

        Storage.THREAD_STORAGE_ID = 'forum-thread-storage-id';

        Storage.POST_STORAGE_ID = 'forum-post-storage-id';
        return Storage;
    })();
    forum.Storage = Storage;
})(forum || (forum = {}));
