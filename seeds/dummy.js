exports.seed = function(knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('users').del(),
		knex('posts').del(),
		knex('comments').del(),

		// Inserts seed entries
		knex('users').insert({
			id: 1,
			full_name: 'rowValue',
			username: 'Bobby'

		}),
		knex('users').insert({
			id: 2,
			full_name: 'rowValue2',
			username: 'Bobby'

		}),
		knex('users').insert({
			id: 3,
			full_name: 'rowValue3',
			username: 'Bobby'

		}),


		// Inserts seed entries
		knex('posts').insert({
			id: 1,
			title: 'rowValue',
			content: "blah blah blah blah",
			user_id: 1
		}),
		knex('posts').insert({
			id: 2,
			title: 'rowValue2',
			content: "blah  we  blah blah blah",
			user_id: 1

		}),
		knex('posts').insert({
			id: 3,
			title: 'rowValue3',
			content: "blah blah weee blah blah",
			user_id: 2

		}),


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
