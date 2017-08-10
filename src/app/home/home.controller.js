angular.module('orderCloud')
	.controller('HomeCtrl', HomeController)
;

function HomeController(ocAppName, FeaturedProducts) {
	var vm = this;

	vm.featuredProducts = FeaturedProducts;

	vm.carousel = {
		Settings: {
			Interval: 18000,
			Active: 0,
			NoWrap: false
		},
		Slides: [
			{
				URL: 'assets/images/carousel_1_1920x900.jpg', 
				Title: ocAppName.Watch(),
				SubText: 'Powered by Four51',
				ID: 0
			},
			{
				URL: 'assets/images/carousel_2_1920x900.jpg',
				Title: ocAppName.Watch(),
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' application',
				ID: 1
			},
			{
				URL: 'assets/images/carousel_3_1920x900.jpg',
				Title: ocAppName.Watch(),
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' application',
				ID: 2
			}
		]
	};
}