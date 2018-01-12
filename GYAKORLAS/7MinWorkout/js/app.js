//<M>
// Ez a file csak az alkalmazás különböző modljainak deklarációját tartalmazza.
// 2016-01-05
// AX07057
//</M>

angular.module('app', ['ngRoute', '7minWorkout'])
    .config(function ($routeProvider, $sceDelegateProvider) {
        "use strict";
        //$locationProvider.html5Mode(true);
        $routeProvider.when('/start', {
            templateUrl: 'partials/start.html'
        });
        $routeProvider.when('/workout', {
            templateUrl: 'partials/workout.html',
            controller: 'WorkoutController'
        });
        $routeProvider.when('/finish', {
            templateUrl: 'partials/finish.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/start'
        });
    
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://*.youtube.com/**'
        ])
    });
angular.module('7minWorkout', []);