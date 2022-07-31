// bring in our model/mongodb
const { Event, Transaction } = require('../models/model');

// create an eventController object where we can add our methods
const transactController = {};

//this is test function for debugging.
transactController.test = (req, res, next) => {
  console.log('testing the transactController middleware');
  return next();
};

// creating middelware to get information from out mongodb.  The methods on mongodb are aysynchronous, so we need async/await
transactController.showTransacts = async (req, res, next) => {
  try {
    // we need to find all the transactions for each event in our db schema with .find()
    const allTransacts = await Transaction.find({});
    //console.log('this is in allTransacts', allTransacts);
    console.log('showTransacts middleware', allTransacts);
    // send this information back to the front end where it gets .json'd
    res.locals.allTransacts = allTransacts;
    return next();
  } catch (err) {
    return next({
      log: `transactController.showTransacts: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in transactContoller.showTransacts.' },
    });
  }
};

// need middleware for post request- to get information from the user and addEvent.  This information gets saved to req.body
transactController.addTransact = async (req, res, next) => {
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

module.exports = transactController;
