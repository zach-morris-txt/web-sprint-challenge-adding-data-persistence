//Imports
const db = require('../../data/dbConfig')


//Helper-Functions
function getProject() {
    return db('projects')
}

async function createProject(project) {
    const [project_id] = await db('projects').insert(project)
    return getProject().where({ project_id }).first()
}


//Exports; Exposing
module.exports = {
    getProject,
    createProject,
}