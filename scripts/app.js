/*global angular, $, document */

(function () {
	
	'use strict';
	
	var app = angular.module('chessboardGithubPagesApp', [
		'ngRoute'
	])
		.config(function ($locationProvider, $routeProvider) {
			$routeProvider
				.when('/', {templateUrl: 'views/main.html'})
			
				.when('/overview', {templateUrl: 'views/overview.html'})
			
				.when('/examples/basic/empty', {templateUrl: 'views/examples/basic-empty.html'})
				.when('/examples/basic/start', {templateUrl: 'views/examples/basic-start.html'})
				.when('/examples/basic/fen', {templateUrl: 'views/examples/basic-fen.html'})
				.when('/examples/basic/position', {templateUrl: 'views/examples/basic-position.html'})
				.when('/examples/basic/multiple', {templateUrl: 'views/examples/basic-multiple.html'})
			
				.when('/examples/styling/customcolors', {templateUrl: 'views/examples/styling-customcolors.html'})
				.when('/examples/styling/images', {templateUrl: 'views/examples/styling-images.html'})
				.when('/examples/styling/boardimages', {templateUrl: 'views/examples/styling-boardimages.html'})
				.when('/examples/styling/checkers', {templateUrl: 'views/examples/styling-checkers.html'})
			
				.when('/examples/methods/getposition', {templateUrl: 'views/examples/methods-getposition.html'})
				.when('/examples/methods/setposition', {templateUrl: 'views/examples/methods-setposition.html'})
				.when('/examples/methods/clear', {templateUrl: 'views/examples/methods-clear.html'})
				.when('/examples/methods/setorientation', {templateUrl: 'views/examples/methods-setorientation.html'})
				.when('/examples/methods/move', {templateUrl: 'views/examples/methods-move.html'})
			
				.when('/examples/integration/chessjs', {templateUrl: 'views/examples/integration-chessjs.html'})
				.when('/examples/integration/garbochess', {templateUrl: 'views/examples/integration-garbochess.html'})
				.when('/examples/integration/stockfish', {templateUrl: 'views/examples/integration-stockfish.html'})
			
				.when('/documentation', {templateUrl: 'views/documentation.html'});
			
				//.otherwise({redirectTo: '/'});
			
			$locationProvider
				.html5Mode(false);
		});
	
	app.run(['$rootScope', '$location', function ($rootScope, $location) {
		$rootScope.go = function (url) {
			$location.path(url);
		};
	}]);
	
	app.directive('caustiqueAppNavbar', function () {
		return {
			restrict: 'A',
			templateUrl: 'directive_templates/navbar.html'
		};
	});
	
	app.directive('caustiqueAppSidebar', function () {
		return {
			restrict: 'A',
			templateUrl: 'directive_templates/sidebar.html'
		};
	});

	app.directive('caustiqueAppSidebarDocumentation', function () {
		return {
			restrict: 'A',
			templateUrl: 'directive_templates/sidebar-documentation.html'
		};
	});

	
}());