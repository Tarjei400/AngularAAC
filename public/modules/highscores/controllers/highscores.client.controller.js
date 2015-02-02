'use strict';

var Highscores = angular.module('highscores') 

Highscores.controller('HighscoresController', ['$scope','$http',
	function($scope, $http) {

		
		$scope.sampleData = "No respond";
		
		$http.get("/db/player").success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		  $scope.sampleData = data;
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    $scope.sampleData = data;
		  });
		  
		
		
	}
]);