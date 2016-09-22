'use strict';

angular.module('myApp', [])

.controller("httpCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.services = [
    {ID:1, name: 'Get IP', url:'https://api.ipify.org?format=json'},
    {ID:2, name: 'Get Geo Information', url:'http://services.groupkt.com/state/get/'},
    {ID:3, name: 'Get Weather - Will get Error', url:'http://api.openweathermap.org/data/2.5/weather?q=London,uk'}
  ]

  $scope.selectedService = {};
  $scope.selectService = function(selected) {
    $scope.response = {};

    if (selected != undefined && selected != null) {
      $scope.selectedService = selected;

      // get countries
      if(selected.ID == 2) {
        $scope.countries = {};
        $http.get('http://services.groupkt.com/country/get/all')
        .then(
          function successCallback(response) {
            $scope.countries = response.data.RestResponse.result;
          }, function errorCallback(response) {
            $scope.response = response;
        });
      }
    }
  }

  // Get IP service
  $scope.ip = '';
  $scope.getIP = function() {
    $http.get($scope.selectedService.url)
    .then(
      function successCallback(response) {
        $scope.response = response;
        $scope.ip = response.data.ip;
      }, function errorCallback(response) {
        $scope.response = response;
      });
  }

  // Get Geo Information service
  $scope.states = {};
  $scope.getStates = function(selected) {
    if (selected != undefined && selected != null) {
      $http.get($scope.selectedService.url + selected.alpha3_code + '/all')
      .then(
        function successCallback(response) {
          $scope.response = response;
          $scope.states = response.data.RestResponse.result;
        }, function errorCallback(response) {
          $scope.response = response;
      });
    }
  }

  // Get Weather service
  $scope.getWeather = function() {
    $http.get($scope.selectedService.url)
    .then(
      function successCallback(response) {
        $scope.response = response;
      }, function errorCallback(response) {
        $scope.response = response;
      });
  }
}])
