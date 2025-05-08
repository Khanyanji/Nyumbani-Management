// migrations/20240101000004_create_payments.js
exports.up = function(knex) {
    return knex.schema.createTable('payments', (table) => {
      table.increments('id').primary();
      table.integer('tenant_id').unsigned().references('id').inTable('tenants');
      table.date('payment_date').notNullable();
      table.decimal('amount', 10, 2).notNullable();
      table.string('method').notNullable();
      table.string('reference');
      table.boolean('verified').defaultTo(false);
      table.timestamps(true, true);
    });
  };