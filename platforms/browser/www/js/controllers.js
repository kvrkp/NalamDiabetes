'use strict';

/* Controllers */
var diabetesControllers = angular.module('diabetesControllers', []);

diabetesControllers.controller('homeCtrl', [ '$scope', 
		function($scope) {
			$scope.version = '1.0.0';
		} ]);
