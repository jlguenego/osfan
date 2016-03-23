angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("tmpl/my_body.html","<ng-view></ng-view>");
$templateCache.put("tmpl/my_footer.html","<hr/>\r\n<h1>Footer</h1>");
$templateCache.put("tmpl/my_header.html","<h1>Header</h1>\r\n<a href=\"#/\">Accueil</a> | <a href=\"#/mon-compte\">Mon compte</a>\r\n<hr/>");
$templateCache.put("route/account.html","<h1>Mon compte</h1>\r\n\r\n<os-table src=\"csv/account.csv\"></os-table>\r\n");
$templateCache.put("route/home.html","<h1>Home</h1>\r\nPays:<br/>\r\n<input type=\"text\" ng-model=\"country\" ui-validate=\"{isCountry: \'isCountry($value)\' }\"><br/>\r\nTon pays est : {{country}}<br/>\r\n\r\n<input type=\"text\" ng-model=\"myNote\"><br/>\r\n\r\n<os-star note=\"3\"></os-star>\r\n");}]);