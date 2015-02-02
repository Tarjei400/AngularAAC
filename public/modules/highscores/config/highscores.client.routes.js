'use strict';

//Setting up route
angular.module('highscores').config(['$stateProvider',
	function($stateProvider) {
		// Highscores state routing
		$stateProvider.
		state('highscores', {
			url: '/highscores',
			templateUrl: 'modules/highscores/views/highscores.client.view.html'
		});
	}
]);