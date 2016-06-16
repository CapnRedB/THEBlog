var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
	knex('users').then(function(result, err) {
		res.render('users', {
			users: result
		});
	});
});
router.get('/:id', function(req, res) {
	knex('users').where('id', req.params.id).first().then(function(result, err) {
		console.log(result);
		res.render('user', {
			title: "WTF",
			user: result
		})
	})
})

module.exports = router;
