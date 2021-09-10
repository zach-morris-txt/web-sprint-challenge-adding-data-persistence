exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { project_name: "3DPrinter", project_description: "Instructables.com Arduino RepRap DeltaPrinter", project_completed: 1 },
      { project_name: "Music Downloads", project_description: "YouTube.com Link To mp3 Conversion", project_completed: 0 }
    ]);
};