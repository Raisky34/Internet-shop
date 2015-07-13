module.controller('ProductCtrl', ['$scope', 'product', function($scope, product) { 
	photos.getPhotoList.then(function(res) {
		$scope.product = res;
	});
}]);