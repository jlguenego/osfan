(function() {
	'use strict';

	var app = angular.module('os-table', []);

	app.directive('osTable', [ '$injector', function($injector) {
	
		var $compile = $injector.get('$compile');
		var $http = $injector.get('$http');
		
		return {
			restrict: 'CEA',
			link: function(scope, element, attrs) {
				console.log('os-table link', arguments);
				var src = attrs.src;
				$http.get(src).then(function(response) {
					var data = Papa.parse(response.data).data;
					console.log('data', data);
					var table = angular.element('<table></table>');
					var header = angular.element('<thead></thead>');
					var row = angular.element('<tr></tr>');
					for (var i = 0; i < data[0].length; i++) {
						console.log('i', i);
						var label = data[0][i];
						var th = angular.element('<th></th>');
						th.append(label);
						row.append(th);
					}
					console.log('row', row);
					header.append(row);
					table.append(header);
					element.append(table);
				}).catch(function(error) {
					console.error('error', error)
				});
				
				
			}
		};
	}]);
	
	
})();
