exports.seed = function(knex, Promise) {
	return Promise.join(
		// Deletes ALL existing entries
		knex('users').del(),

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

		})
	);
};
