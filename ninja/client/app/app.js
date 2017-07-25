angular.module('dashboard', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'ninjaController'
  })
  .when('/ninjas/'), {
    templateUrl: 'partials/ninjas/_index.html',
    controller: 'ninjaController'
  }
  .when('/ninjas/:id'), {
    templateUrl: 'partials/ninjas/_show.html',
    controller: 'ninjaController'
  }
  .when('/ninjas/:id/edit'), {
    templateUrl: 'partials/ninjas/_edit.html',
    controller: 'ninjaController'
  }
  .when('/ninjas/new'), {
    templateUrl: 'partials/ninjas/_create.html',
    controller: 'ninjaController'
  }
  .otherwise({
    redirectTo: '/ninjas/'
  })
}])
