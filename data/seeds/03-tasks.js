exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
      // species_id must match valid species
      { task_description: "Buy Parts", task_notes: "Approximately 100$", task_completed: 0, project_id: 1 },
      { task_description: "Download Missing Files", task_notes: "Don't Forget Album-Covers", task_completed: 1, project_id: 2 },
      { task_description: "Correct Tag-Info", task_notes: "New Downloads Will Require This", task_completed: 0, project_id: 2 },
      { task_description: "Update MusicTable", task_notes: "Reference New Downloads", task_completed: 0, project_id: 2 },
    ]);
};