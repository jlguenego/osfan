(function() {
	'use strict';

	var app = angular.module('os-widget', []);

	app.directive('osStar', function() {
		return {
			restrict: 'CEA',
			link: function(scope, element) {
				console.log('os-star link', arguments);
				var note = 3;
				var html = '';
				for (var i = 0; i < note; i++) {
					html += '<img src="os-widget/img/yellow_star.png" />';
				}
				for (var i = note; i < 5; i++) {
					html += '<img src="os-widget/img/white_star.png" />';
				}
				element.html(html);
			}
		};
	});
	
	
})();
