exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users.varchar('firstname', 128).notNullable();
    users.varchar('lastname', 128).notNullable();
      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
      
      users
        .string("email")
        .unique()
        .notNullable()
        .comment("max 50 chars");
    })
    .createTable("topic", tbl => {
      tbl.increments();
      tbl
        .text("topic_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("artwork", tbl => {
      tbl.increments();
      tbl
        .text("title", 128)
        .unique()
        .notNullable();
      tbl.text("description", 300).notNullable();
      tbl.text('source_image').nullable();
      tbl
        .integer("theme_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("topic")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("artist_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("artwork")
    .dropTableIfExists("topic")
    .dropTableIfExists("users");
};
