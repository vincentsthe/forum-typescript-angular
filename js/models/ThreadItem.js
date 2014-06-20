/// <reference path="../_all.ts" />
var forum;
(function (forum) {
    var ThreadItem = (function () {
        function ThreadItem(thread) {
            this.id = thread.id;
            this.title = thread.title;
            this.author = thread.author;
            this.reply = forum.Post.getPostByThread(this.id).length;
        }
        return ThreadItem;
    })();
    forum.ThreadItem = ThreadItem;
})(forum || (forum = {}));
