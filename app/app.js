(function() {
	'use strict';

	var app = angular.module('mainApp', ['ui.validate']);
	
	app.run(['$rootScope', function($rootScope) {
		$rootScope.isCountry = function(value) {
			console.log('$rootScope.country', $rootScope.country);
			var countries = ['France', 'Italie'];
			if (countries.indexOf(value) >= 0) {
				return true;
			}
			return false;
		};
	}]);

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
