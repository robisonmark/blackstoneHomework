(function () {
	var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('products.json').success(function(data){
      store.products = data;
    });
  }]);

	app.controller("ReviewController", ['$http', function($http){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			$http.post('products.json', product.reviews.author);
            this.review ={};
		};
	}]);
})();