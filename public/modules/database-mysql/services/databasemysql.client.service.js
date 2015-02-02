'use strict';

angular.module('database-mysql').factory('Databasemysql', [
	function() {
		// Databasemysql service logic
		// ...
		console.log('Database adapter created.:')
		// Public API
		return {
			connect: function() {
				var Sequelize = require('sequelize');
				var sequelize = new Sequelize('nnw', 'root', '', {
				      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
				      port:    3306, // or 5432 (for postgres)
				})	
				sequelize
				  .authenticate()
				  .complete(function(err) {
				    if (!!err) {
				      console.log('Unable to connect to the database:', err)
				    } else {
				      console.log('Connection has been established successfully.')
				    }
				  })
				return sequelize;
			}
		};
	}
]);