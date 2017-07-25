var app = angular.module('app', [])
app.factory('productFactory', ['$http', function($http) {
  var factory = {};
  var products = [];

  factory.addProduct = function(product, callback){
      products.push(product);
      callback(products);
  }
  factory.delete = function(id, callback){
    products.splice(id,1);
    callback(products);
  }
  return factory;
}]);

app.controller('productController', ['$scope','productFactory', function($scope, productFactory) {
  // callback, but not as an anonymous function, rather a named function!
  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }

  $scope.addProduct = function(){
    productFactory.addProduct($scope.product, setProducts);
  }
  $scope.delete = function(id){
    productFactory.delete(id,setProducts);
  }

}]);
