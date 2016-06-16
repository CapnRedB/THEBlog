exports.seed = function(knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('comments').del(),

		// Inserts seed entries
		knex('comments').insert({
			id: 1,
			body: 'blah blah trash post blah',
			user_id: 1,
			posts_id: 1
		}),
		knex('comments').insert({
			id: 2,
			body: 'blah blah good post blah',
			user_id: 1,
			posts_id: 2
		}),
		knex('comments').insert({
			id: 3,
			body: 'blah blah more trash post blah',
			user_id: 2,
			posts_id: 1
		})
	);
};
