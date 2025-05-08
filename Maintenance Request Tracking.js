// migrations/20240101000003_create_maintenance.js
exports.up = function(knex) {
    return knex.schema.createTable('maintenance', (table) => {
      table.increments('id').primary();
      table.integer('tenant_id').unsigned().references('id').inTable('tenants');
      table.integer('property_id').unsigned().references('id').inTable('properties');
      table.string('title').notNullable();
      table.text('description');
      table.enum('status', ['open', 'in_progress', 'completed']).defaultTo('open');
      table.enum('priority', ['low', 'medium', 'high']).defaultTo('medium');
      table.timestamps(true, true);
    });
  };