'use strict';

// creating new module
angular.module('myApp', [])

//            controller      DI (dependency injection) array notation
//              |              |
//              ˅              ˅
.controller('productCtrl', ['$scope', function($scope) {
  // JSON data in scope object
  $scope.products = [
                      {name: 'Apple', price: 14.50, qty: 0},
                      {name: 'Orange', price: 10.25, qty: 0},
                      {name: 'Banana', price: 8.10, qty: 0}
                    ]
}]);
