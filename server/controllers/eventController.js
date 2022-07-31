// bring in our model/mongodb
const { Event, Transaction } = require('../models/model');

// create an eventController object where we can add our methods
const eventController = {};

//this is test function for debugging.
eventController.test = (req, res, next) => {
  console.log('testing the eventController middleware');
  return next();
};

// creating middelware to get information from out mongodb.  The methods on mongodb are aysynchronous, so we need async/await
eventController.showEvents = async (req, res, next) => {
  try {
    // we need to find all the events in our db schema with .find()
    const allEvents = await Event.find({});
    //console.log('this is in allEvents', allEvents);
    console.log('showevents middleware');
    // send this information back to the front end where it gets .json'd
    res.locals.allEvents = allEvents;
    return next();
  } catch (err) {
    return next({
      log: `eventController.showEvents: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in eventContoller.showEvents.' },
    });
  }
};

// need middleware for post request- to get information from the user and addEvent.  This information gets saved to req.body
eventController.addEvent = async (req, res, next) => {
  try {
    const { eventName, eventDescription } = req.body;
    // using object destructing.  Here is what is going on under the hood:
    // const eventName = req.body.eventName;
    // const eventDescription = req.body.eventDescription;
    console.log('this is the req.body', req.body);
    // we are creating an event with info from req.body and saving it to eventMaker.  This info gets sent back to the front
    const eventMaker = await Event.create({
      eventName,
      eventDescription,
    });

    /* const eventMaker = await models.Event.create({
      eventName: req.body.eventName, eventDescription: req.body.Description
    */

    console.log('this is the addEvent', eventMaker);
    res.locals.addEvent = eventMaker;
    return next();
  } catch (err) {
    return next({
      log: `eventController.addEvent: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in eventController.addEvent.' },
    });
  }
};

// need middleware to delete an event
// the eventName will be on the URL and be sent to the backend with req.params
eventController.deleteEvent = async (req, res, next) => {
  try {
    const { eventName } = req.params;
    console.log('this is in req.params in deleteEvent', eventName);
    // we are deleting the event in the db by sending the eventName object
    const deleteEvent = await Event.deleteOne({ eventName: eventName });
    console.log('this is after we get deleteEvent from db', deleteEvent);
    //deleting all transactions that were associated with the above event
    const deleteTransactions = await Transaction.deleteMany({
      eventName_id: eventName,
    });
    console.log(
      'this is after we delete the associated transactions',
      deleteTransactions
    );
    return next();
  } catch (err) {
    return next({
      log: `eventController.deleteEvent: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in eventController.deleteEvent.' },
    });
  }
};

// need middleware to edit eventName
// the eventName to update will be sent to the backend on the req.params object
// the parts to edit on the event schema will be sent to the backend on the req.body object
eventController.updateEvent = async (req, res, next) => {
  try {
    const { eventName } = req.params;
    console.log('this is in the req.params in updateEvent', eventName);
    // something special here is that if you want to edit/update multiple items, you have to use $set{}
    const updateEvent = await Event.findOneAndUpdate(
      { eventName: req.params.eventName },
      {
        $set: {
          eventName: req.body.eventName,
          eventDescription: req.body.eventDescription,
        },
      }
    );
    res.locals.updateEvent = updateEvent;
    return next();
  } catch (err) {
    return next({
      log: `eventController.deleteEvent: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in eventController.deleteEvent.' },
    });
  }
};

// need middleware to edit eventDescription

module.exports = eventController;
