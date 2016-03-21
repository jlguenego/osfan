(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.directive('myHeader', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'my_header.html',
			transclude: true
		};
	});
	
	app.directive('myBody', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'my_body.html',
			transclude: true
		};
	});
	
	app.directive('myFooter', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'my_footer.html',
			transclude: true
		};
	});
	
})();
