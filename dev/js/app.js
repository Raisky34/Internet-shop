var module = angular.module('internetShopApp', [
	'restangular',
	'ui.router'
]);

module.config(function($stateProvider, $urlRouterProvider) {
		  
	$urlRouterProvider.otherwise("/productlist");

	var productList = {
	    name: 'productlist',
	    url: '/productlist',
	    templateUrl: 'templates/productlist.html',
	    controller: "ProductCtrl",
	    data: {}
	};

	$stateProvider
		.state(productList);
});