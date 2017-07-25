var app = angular.module('app', [])
app.factory('productFactory', ['$http', function($http) {
  var factory = {};
  var products = [
    {
      name: "hat",
      quantity: 50,
      price: 14.99
    }
  ];
  factory.index = function(callback) {
    callback(products);
  }
  factory.create = function(product){
      product.quantity = 50;
      products.push(product);
  }
  factory.delete = function(id){
    products.splice(id,1);
  }
  factory.update = function(id) {
    if(products[id].quantity > 0 ){
        products[id].quantity = products[id].quantity - 1;
    }
  }
  return factory;
}]);

app.controller('productController', ['$scope','productFactory', function($scope, productFactory) {
  // callback, but not as an anonymous function, rather a named function!
  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }
  productFactory.index(setProducts);
  $scope.create = function(){
    productFactory.create($scope.product);
    $scope.product = {};
  }
  $scope.delete = function(id){
    productFactory.delete(id);
  }

}]);

app.controller('ordersController', ['$scope','productFactory', function($scope, productFactory) {
  // callback, but not as an anonymous function, rather a named function!
  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }
  productFactory.index(setProducts);
  $scope.update = function(id){
    productFactory.update(id);
  }

}]);
