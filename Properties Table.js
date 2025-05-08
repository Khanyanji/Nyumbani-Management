// migrations/20240101000001_create_properties.js
exports.up = function(knex) {
    return knex.schema.createTable('properties', (table) => {
      table.increments('id').primary();
      table.integer('landlord_id').unsigned().references('id').inTable('users');
      table.string('name').notNullable();
      table.text('address').notNullable();
      table.enum('type', ['apartment', 'house', 'commercial']);
      table.integer('units').defaultTo(1);
      table.json('amenities');
      table.decimal('monthly_rent', 10, 2);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('properties');
  };