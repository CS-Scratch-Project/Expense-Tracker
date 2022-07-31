// bring in our model/mongodb
const { Event, Transaction } = require('../models/model');

// create an eventController object where we can add our methods
const transactController = {};

//this is test function for debugging.
transactController.test = (req, res, next) => {
  console.log('testing the middleware');
  return next();
};

// creating middelware to get information from out mongodb.  The methods on mongodb are aysynchronous, so we need async/await
transactController.showTransact = async (req, res, next) => {
  try {
    // we need to find all the transactions for each event in our db schema with .find()
    const allTransacts = await Transaction.find({});
    //console.log('this is in allTransacts', allTransacts);
    console.log('showTransacts middleware');
    // send this information back to the front end where it gets .json'd
    res.locals.allTransacts = allTransacts;
    return next();
  } catch (err) {
    return next({
      log: `transactController.showTransact: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in transactContoller.showTransact.' },
    });
  }
};

module.exports = transactController;
