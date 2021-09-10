exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
      { resource_name: "Instructables.com", resource_description: "DIY Projects Website" },
      { resource_name: "YouTube.com", resource_description: "Music Videos Website" }
    ]);
};