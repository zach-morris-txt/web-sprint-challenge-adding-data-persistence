//Imports
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan')
const cors = require('cors')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')


//Instance Of Express App
const server = express();


//Calling Middleware
server.use(express.json());
server.use(helmet());
server.use(morgan())
server.use(cors())


//Consuming Routers
server.use('api/projects', projectRouter)
server.use('api/resources', resourceRouter)
server.use('api/tasks', taskRouter)


//Endpoints
server.get('/', (req, res) => {
    res.send(
        `
        <h1>Welcome</h1>
        `
    )
})


//Catch-All
server.use('*', (req, res, next) => {
    next({
        status: 404,
        message: 'page not found'
    })
})


//Error-Handling Middleware
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});


//Exports; Exposing
module.exports = server;