/// <reference path="../_all.ts" />
var forum;
(function (forum) {
    var ForumRoute = (function () {
        function ForumRoute($routeProvider) {
            this.$routeProvider = $routeProvider;
            this.$routeProvider.when('/', {
                templateUrl: 'partials/home.html',
                controller: 'Controller'
            }).otherwise({
                redirectTo: '/'
            });
        }
        return ForumRoute;
    })();
    forum.ForumRoute = ForumRoute;
})(forum || (forum = {}));
