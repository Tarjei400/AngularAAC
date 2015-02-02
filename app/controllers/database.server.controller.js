'use strict';

/**
 * Module dependencies.
 */

var _ = require('lodash');

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
/**
 * Create a Database
 */
exports.create = function(req, res) {
		res.status(400).send({
			message: 'Query completed.'
		});
};

/**
 * Show the current Database
 */
exports.read = function(req, res) {

};

/**
 * Update a Database
 */
exports.update = function(req, res) {

};

/**
 * Delete an Database
 */
exports.delete = function(req, res) {

};

/**
 * List of Databases
 */
exports.list = function(req, res) {

};