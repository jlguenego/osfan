(function() {
	'use strict';

	var app = angular.module('os-widget', []);

	app.directive('osStar', function() {
		return {
			restrict: 'CEA',
			link: function() {
				console.log('os-star link');
			}
		};
	});
	
	
})();
