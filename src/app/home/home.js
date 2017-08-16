angular.module('orderCloud')
	.config(HomeConfig)
	.controller('HomeCtrl', HomeController)
;

function HomeConfig($stateProvider) {
	$stateProvider
		.state('home', {
			parent: 'base',
			url: '/home',
			templateUrl: 'home/templates/home.tpl.html',
			controller: 'HomeCtrl',
			controllerAs: 'home',
			data: {
				pageTitle: 'Home'
			},
			resolve: {
				FeaturedProducts: function(OrderCloudSDK){
					var params = {
						pageSize: 100,
						filters: {
							'xp.Featured': true
						}
					};
					return OrderCloudSDK.Me.ListProducts(params);
				},
				FeaturedCategories: function(OrderCloudSDK){
					var params = {
						pageSize: 100,
						depth: 'all',
						filters: {
							'xp.Featured': true
						}
					};
					return OrderCloudSDK.Me.ListCategories(params);
				}
			}
		})
	;
}

function HomeController(FeaturedProducts, FeaturedCategories, ocAppName) {
	var vm = this;
	vm.productList = FeaturedProducts;
	vm.categoryList = FeaturedCategories;

	vm.carousel = {
		Settings: {
			Interval: 9000,
			Active: 0,
			NoWrap: false
		},
		Slides: [
			{
				URL: '/assets/images/carousel_storefront.jpg', 
				Title: ocAppName.Watch(),
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' application',
				ID: 0
			},
			{
				URL: '/assets/images/carousel_tacos-beer.jpg',
				Title: 'Save $10 on your first order!',
				SubText: 'First time customers use 10OFF at checkout',
				ID: 1
			},
			{
				URL: '/assets/images/carousel_avocados.jpg',
				Title: 'Minnesota Sourced',
				SubText: 'Browse by products or categories online',
				ID: 2
			}
		]
	};
}
