/*jslint node: true*/
/*global angular */

'use strict';

angular.module('chessboardGithubPagesApp')
	.controller('MainCtrl', ['$scope', function ($scope) {
	}]);

angular.module('chessboardGithubPagesApp')
	.controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
		$scope.current_path = $location.path();
	}]);
