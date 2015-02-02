'use strict';

//Setting up route
angular.module('latestnews').config(['$stateProvider',
	function($stateProvider) {
		// Latestnews state routing
		$stateProvider.
		state('lastest-news', {
			url: '/lastest-news',
			templateUrl: 'modules/latestnews/views/lastest-news.client.view.html'
		});
	}
]);