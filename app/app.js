(function() {
	'use strict';

	var app = angular.module('mainApp', ['ui.validate', 'ngRoute', 'os-widget', 'os-table']);
	
	var clone = function(obj) {
		console.log('this', this);
		if (obj !== null && typeof obj === 'object') {
			var result = {};
			for (var p in obj) {
				result[p] = clone(obj[p]);
				// result[p] = obj[p]; shallow copy
			}
			return result;
		} else {
			// type primitif
			return obj;
		}
	}.bind({});
	
	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'route/home.html'
			})
			.when('/mon-compte', {
				templateUrl: 'route/account.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
	app.run(['$rootScope', '$log', function($rootScope, $log) {
		$rootScope.isCountry = function(value) {
			$log.debug('$rootScope.country', $rootScope.country);
			var countries = ['France', 'Italie'];
			if (countries.indexOf(value) >= 0) {
				return true;
			}
			return false;
		};
		
		var a = {};
		var b = clone(a);
		
	}]);

	app.directive('myHeader', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'tmpl/my_header.html',
			transclude: true
		};
	});
	
	app.directive('myBody', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'tmpl/my_body.html',
			transclude: true
		};
	});
	
	app.directive('myFooter', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'tmpl/my_footer.html',
			transclude: true
		};
	});
	
	
	
})();
