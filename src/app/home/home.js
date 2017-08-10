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
			Interval: 5000,
			Active: 0,
			NoWrap: false
		},
		Slides: [
			{
				URL: 'assets/images/carousel1.jpg', 
				Title: ocAppName.Watch(),
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' application',
				ID: 0
			},
			{
				URL: 'assets/images/carousel2.jpg',
				Title: 'Carousel Image Two',
				SubText: 'This is the second image',
				ID: 1
			},
			{
				URL: 'assets/images/carousel3.jpg',
				Title: 'Carousel Image Three',
				SubText: 'This is the third image',
				ID: 2
			}
		]
	};
}
