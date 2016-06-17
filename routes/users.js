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
router.post('/', function(req, res) {
	console.log("weee");
	knex('users').insert({
		username: req.body.username,
		full_name: req.body.full_name
	}, 'id').then(function(result) {
		res.redirect('users');
	})
})
router.get('/new', function(req, res) {
	res.render('new');
})

router.get('/:id', function(req, res) {
	knex('users').where('id', req.params.id).first().then(function(result, err) {
		console.log(result);
		res.render('user', {
			title: "WTF",
			user: result
		})
	})
})
router.get('/:id/delete', function(req, res) {
	console.log("DELETE");
	knex('users').where('id', req.params.id).first().del().then(function(result,
		err) {
		res.redirect('/users');
	})
})

module.exports = router;
