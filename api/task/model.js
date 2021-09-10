//Imports
const db = require('../../data/dbConfig')


//Helper-Functions
function getTask() {
    return db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 
                't.task_description', 
                't.task_notes', 
                't.task_completed', 
                'p.project_name', 
                'p.project_description')
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return getTask().where({ task_id }).first()
}


//Exports; Exposing
module.exports = {
    getTask,
    createTask,
}