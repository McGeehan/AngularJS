'use strict';

// creating new module
angular.module('myApp', [])

//            controller      rootScope
//              |              |
//              ˅              ˅
.controller('productCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
  // JSON data in scope object
  $scope.products = [
                      {name: 'Apple', price: 14.50},
                      {name: 'Orange', price: 10.25},
                      {name: 'Banana', price: 8.10}
                    ]

  $scope.addtoCart = function(item) {
    // broadcast
    $rootScope.$broadcast('addItem', {'item':item});
  }

  $scope.removefromCart = function(item) {
    // broadcast
    $rootScope.$broadcast('removeItem', {'item':item});
  }
}])

// cart controller
.controller('cartCtrl', ['$scope', function($scope) {
  // event listener for broadcast object
  $scope.$on('addItem', function(event, args) {
    $scope.addItem(args.item);
  })

  // event listener for broadcast object
  $scope.$on('removeItem', function(event, args) {
    $scope.removeItem(args.item);
  })

  $scope.cartItems = [];

  $scope.addItem = function(item) {
    if ($scope.cartItems.indexOf(item) == -1) {
      $scope.cartItems.push(item)
      $scope.cartItems[$scope.cartItems.indexOf(item)].qty = 1;
    }
    else {
      $scope.cartItems[$scope.cartItems.indexOf(item)].qty += 1;
    }
  }

  $scope.removeItem = function(item) {
    var index = $scope.cartItems.indexOf(item);
    $scope.cartItems.splice(index, 1);
  }
}])
