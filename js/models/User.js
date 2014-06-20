/// <reference path="../_all.ts" />
var forum;
(function (forum) {
    var User = (function () {
        function User(username) {
            this.username = username;
        }
        User.exist = function (name) {
            var listUser = forum.Storage.getUser();

            var ada = false;

            for (var i = 0; i < listUser.length; i++) {
                if (listUser[i].username == name) {
                    ada = true;
                }
            }

            return ada;
        };

        User.add = function (name) {
            var listUser = forum.Storage.getUser();

            var newUser = new User(name);
            listUser.push(newUser);

            forum.Storage.putUser(listUser);
        };
        return User;
    })();
    forum.User = User;
})(forum || (forum = {}));
