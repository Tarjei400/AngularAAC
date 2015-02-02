'use strict';

angular.module('database-mysql').factory('Databasemysql', [
	function() {
		// Databasemysql service logic
		// ...
		console.log('Database adapter created.:')
		// Public API
		return {
			connect: function() {

				return sequelize;
			}
		};
	}
]);