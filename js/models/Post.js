/// <reference path="../_all.ts" />
var forum;
(function (forum) {
    var Post = (function () {
        function Post(threadId, postNumber, author, content) {
            this.threadId = threadId;
            this.postNumber = postNumber;
            this.author = author;
            this.content = content;
        }
        Post.nextPostNumber = function (threadId) {
            var counter = 0;
            var listPost = forum.Storage.getPost();

            for (var i = 0; i < listPost.length; i++) {
                if (threadId == listPost[i].threadId) {
                    counter++;
                }
            }

            return counter + 1;
        };

        Post.getPostByThread = function (threadId) {
            var listPost = forum.Storage.getPost();
            var returnPost = [];

            for (var i = 0; i < listPost.length; i++) {
                if (threadId == listPost[i].threadId) {
                    returnPost.push(listPost[i]);
                }
            }

            return returnPost;
        };

        Post.prototype.save = function () {
            var listPost = forum.Storage.getPost();
            listPost.push(this);
            forum.Storage.putPost(listPost);
        };
        return Post;
    })();
    forum.Post = Post;
})(forum || (forum = {}));
