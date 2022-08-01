// require the express library
const { createNextState } = require('@reduxjs/toolkit');
const express = require('express');

// bringing in our middleware
const eventController = require('../controllers/eventcontroller');

// bringing in our router by invoking Router() and bringing in our router- purely for organization
const router = express.Router();

// need a  get request to render our current events at our / endpoint
// sending this info from to fetch on the front end and go to the middleware (and the db), which gets back to the send request
router.get(
  '/getevents',
  //eventController.test,
  eventController.showEvents,
  (req, res) => {
    return res.status(200).json(res.locals.allEvents);
  }
);

// we will get information from the user and this gets saved on the req.body which will be send to the eventMaker middleware
// this information gets sent to the back
router.post('/addevent', eventController.addEvent, (req, res) => {
  return res.status(200).json(res.locals.addEvent);
});

// we will get the eventName back from the user and this gets saved on the req.params which will send info to the middleware
// no information will get sent back, so I am just sending a string
router.delete('/:eventName', eventController.deleteEvent, (req, res) => {
  return res.status(200).json('This event has been deleted');
});

router.patch('/:eventName', eventController.updateEvent, (req, res) => {
  return res.status(200).json(res.locals.updateEvent);
});

// we export our router
module.exports = router;
