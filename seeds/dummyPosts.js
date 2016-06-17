exports.seed = function(knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('posts').del(),

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

		})
	);
};
