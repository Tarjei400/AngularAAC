'use strict';

module.exports = function(app) {
	var db = require('../../app/controllers/database.server.controller');

	// Setting up the users profile api
	app.route('/db/player').get(db.create);
};