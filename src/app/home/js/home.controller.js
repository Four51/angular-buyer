angular.module('orderCloud')
	.controller('HomeCtrl', HomeController)
;

function HomeController(ocAppName, FeaturedProducts) {
	var vm = this;

	vm.featuredProducts = FeaturedProducts;

	vm.carousel = {
		Settings: {
			Interval: 5000,
			Active: 0,
			NoWrap: false
		},
		Slides: [
			{
				URL: 'assets/images/pm_carousel_img_2.png', 
				Title: ocAppName.Watch(),
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' application',
				ID: 0
			},
			{
				URL: 'assets/images/pm_carousel_img_3.png',
				Title: 'Carousel Image Two',
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' application',
				ID: 1
			},
			{
				URL: 'assets/images/pm_carousel_img_4.png',
				Title: 'Carousel Image Three',
				SubText: 'Welcome to the ' + ocAppName.Watch() + ' application',
				ID: 2
			}
		]
	};
}