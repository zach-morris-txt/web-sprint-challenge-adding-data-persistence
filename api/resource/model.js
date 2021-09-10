//Imports
const db = require('../../data/dbConfig')


//Helper-Functions
function getResource() {
    return db('resources')
}

async function createResource(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return getResource().where({ resource_id }).first()
}


//Exports; Exposing
module.exports = {
    getResource,
    createResource,
}