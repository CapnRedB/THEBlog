exports.up = function(knex, Promise) {
	return knex.schema.createTable("comments", function(table) {
		table.increments().primary(),
			table.string("body"),
			table.integer("user_id").unsigned().index().references('users.id').onDelete(
				'cascade'),
			table.timestamp('created_at').defaultTo(knex.fn.now()),
			table.integer("posts_id").unsigned().index().references('posts.id').onDelete(
				'cascade')
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('comments');
};
