exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id') //PK
            table.string('project_name', 140).notNullable()
            table.string('project_description', 280)
            table.integer('project_completed').defaultTo(0) //Essentially SQLite Boolean
        })
        .createTable('resources', table => {
            table.increments('resource_id') //PK
            table.string('resource_name', 140).notNullable().unique()
            table.string('resource_description', 280)            
        })
        .createTable('tasks', table => {
            table.increments('task_id') //PK
            table.string('task_description', 280).notNullable()
            table.string('task_notes', 280)
            table.integer('task_completed').defaultTo(0) //Essentially SQLite Boolean

            table.integer('project_id') //FK
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('project_resources', table => {
            table.increments('project_resources_id') //PK

            table.integer('project_id') //FK
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('resource_id') //FK
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
