//Imports
const express = require('express');
const Helper = require('./model'); //Object W/ Methods


//Miniatire Instance Of Express Server
const router = express.Router()


//Endpoints
router.get('/', (req, res, next) => {
  Helper.getResource()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Helper.createResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next);
});


//Error-Handling Middleware
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: 'Something Broke Inside resourceRouter',
    message: err.message,
    stack: err.stack,
  })
})


//Exports; Exposing
module.exports = router;
