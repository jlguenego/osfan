(function() {
	'use strict';

	var app = angular.module('os-widget', []);

	app.directive('osStar', ['$injector', function($injector) {

		var $compile = $injector.get('$compile');

		return {
			restrict: 'CEA',
			scope: {
				note: '=note'
			},
			link: function(scope, element, attrs) {
				console.log('os-star link', arguments);

				scope.update = function(note) {
					console.log('update');
					scope.note = note;
				};

				scope.$watch('note', function() {
					var note = Number(scope.note);
					note = (isNaN(note)) ? 5 : note;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					var html = '';
					for (var i = 0; i < note; i++) {
						html += '<img ng-click="update(' + (i + 1) + ')" src="os-widget/img/yellow_star.png" />';
					}
					for (var i = note; i < 5; i++) {
						html += '<img ng-click="update(' + (i + 1) + ')" src="os-widget/img/white_star.png" />';
					}
					element.html(html);
					$compile(element.contents())(scope);
				});

			}
		};
	}]);


})();
