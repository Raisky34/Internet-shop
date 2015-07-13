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
	var productParams = {
	    name: 'productparams',
	    url: '/productparams',
	    templateUrl: 'templates/productparams.html',
	    controller: "ProductParamsCtrl",
	    data: {}
	};

	$stateProvider
		.state(productList);
});