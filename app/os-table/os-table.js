(function() {
	'use strict';

	var app = angular.module('os-table', []);

	app.directive('osTable', [ '$injector', function($injector) {
	
		var $compile = $injector.get('$compile');
		
		return {
			restrict: 'CEA',
			link: function(scope, element, attrs) {
				console.log('os-table link', arguments);
				
				
				
			}
		};
	}]);
	
	
})();
