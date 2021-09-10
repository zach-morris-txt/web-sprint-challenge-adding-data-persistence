//Imports
const express = require('express');
const Helper = require('./model'); //Object W/ Methods


//Miniatire Instance Of Express Server
const router = express.Router()


//Endpoints
router.get('/', (req, res, next) => {
  Helper.getTask()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Helper.createTask(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(next);
});


//Error-Handling Middleware
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: 'Something Broke Inside taskRouter',
    message: err.message,
    stack: err.stack,
  })
})


//Exports; Exposing
module.exports = router;