'use strict';
// declaring module
angular.module('Main', []);

// creating new module with adding Main and angular route module
//       application name   other libraries
//                |             | 
//                ˅             ˅
angular.module('myApp', ['ngRoute', 'Main']);