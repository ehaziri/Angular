var myApp = angular.module('app', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "partials/_index.html"
  })
  .when('/persons/:id', {
    templateUrl: "partials/_show.html",
    controller: "ShowController"
  })
});

myApp.factory('PersonFactory', function() {
  var factory = {};
  factory.personList = [];

  factory.getPersonByID = function(id) {
    return factory.personList.find(function(person) {
      return person.id === Number(id);
    })
  };

  return factory;
});

myApp.controller('MainController', function($scope, PersonFactory) {
  var count = 1;

  $scope.personList = PersonFactory.personList;

  $scope.addPerson = function() {
    $scope.newPerson.id = count++;
    $scope.personList.push($scope.newPerson);
    $scope.newPerson = {};
  };
});

myApp.controller('ShowController', function($scope, $route, PersonFactory) {
  $scope.person = PersonFactory.getPersonByID($route.current.params.id);

});
