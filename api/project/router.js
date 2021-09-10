//Imports
const express = require('express');
const Helper = require('./model'); //Object W/ Methods


//Miniatire Instance Of Express Server
const router = express.Router()


//Endpoints
router.get('/', (req, res, next) => {
  Helper.getProject()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Helper.createProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(next);
});


//Error-Handling Middleware
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: 'Something Broke Inside projectRouter',
    message: err.message,
    stack: err.stack,
  })
})


//Exports; Exposing
module.exports = router;