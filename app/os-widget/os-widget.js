(function() {
	'use strict';

	var app = angular.module('os-widget', []);

	app.directive('osStar', function() {
		return {
			restrict: 'CEA',
			scope: {
				n: '=note' 
			},
			link: function(scope, element, attrs) {
				console.log('os-star link', arguments);
				
				scope.$watch('n', function() {
					var note = Number(scope.n);
					note = (isNaN(note)) ? 5 : note;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					var html = '';
					for (var i = 0; i < note; i++) {
						html += '<img src="os-widget/img/yellow_star.png" />';
					}
					for (var i = note; i < 5; i++) {
						html += '<img src="os-widget/img/white_star.png" />';
					}
					element.html(html);
				});
				
			}
		};
	});
	
	
})();
