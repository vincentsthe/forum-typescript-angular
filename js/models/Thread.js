///<reference path="../_all.ts" />
var forum;
(function (forum) {
    var Thread = (function () {
        function Thread(id, title, author) {
            this.id = id;
            this.title = title;
            this.author = author;
        }
        Thread.nextId = function () {
            var listThread = forum.Storage.getThread();
            var maks = 0;

            for (var i = 0; i < listThread.length; i++) {
                if (maks < listThread[i].id) {
                    maks = listThread[i].id;
                }
            }

            return maks + 1;
        };

        Thread.prototype.save = function () {
            var listThread = forum.Storage.getThread();

            listThread.push(this);

            forum.Storage.putThread(listThread);
        };

        Thread.getThreadByUser = function (username) {
            var listThread = forum.Storage.getThread();
            var returnThread = [];

            for (var i = 0; i < listThread.length; i++) {
                if (listThread[i].author == username) {
                    returnThread.push(listThread[i]);
                }
            }

            return returnThread;
        };

        Thread.getThreadById = function (threadId) {
            var listThread = forum.Storage.getThread();

            for (var i = 0; i < listThread.length; i++) {
                if (listThread[i].id == threadId) {
                    return listThread[i];
                }
            }

            return null;
        };

        Thread.prototype.countPost = function () {
            return 5;
            var listPost = forum.Post.getPostByThread(this.id);
            return listPost.length;
        };
        return Thread;
    })();
    forum.Thread = Thread;
})(forum || (forum = {}));
