//Imports
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const projectRouter = require('./project/router.js')
const resourceRouter = require('./resource/router.js')
const taskRouter = require('./task/router.js')


//Instance Of Express App
const server = express()


//Calling Middleware
server.use(express.json())
server.use(helmet())
server.use(morgan())
server.use(cors())


//Consuming Routers
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)


//Endpoints
server.get('/', (req, res) => {
    res.send(
        `
        <h1>Welcome</h1>
        `
    )
})


//Exports; Exposing
module.exports = server;