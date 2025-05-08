// migrations/20240101000001_create_properties.js
exports.up = function(knex) {
    return knex.schema.createTable('properties', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('address').notNullable();
      table.enum('type', ['apartment', 'house', 'condo']);
      table.integer('landlord_id').unsigned().references('id').inTable('users');
      table.integer('units').notNullable();
      table.text('amenities');
      table.decimal('monthly_rent', 10, 2).notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('properties');
  };