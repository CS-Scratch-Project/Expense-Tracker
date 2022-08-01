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
    const {
      name,
      date,
      amount,
      entry,
      transactionComplete,
      people,
      eventName_id,
    } = req.body;
    // using object destructing.

    console.log('this is the req.body', req.body);
    // we are creating an transaction with info from req.body and saving it to transactionMaker.  This info gets sent back to the front
    const transactionMaker = await Transaction.create({
      name,
      date,
      amount,
      entry,
      transactionComplete,
      people,
      eventName_id,
    });

    console.log('this is the addTransact', transactionMaker);
    res.locals.transactionMaker = transactionMaker;
    return next();
  } catch (err) {
    return next({
      log: `transactController.addTransact: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in transactController.addTransact.' },
    });
  }
};

transactController.deleteTransact = async (req, res, next) => {
  try {
    console.log(
      'this is in req.params.name in deleteTransact',
      req.params.name
    );
    const { name } = req.params;
    // we are deleting the event in the db by sending the name object for transactions
    const deleteTransact = await Transaction.deleteOne({ name });
    console.log('this is after we get deleteEvent from db', deleteTransact);
    //deleting all transactions that were associated with the above event
    console.log(
      'this is after we delete the associated transactions',
      deleteTransact
    );
    return next();
  } catch (err) {
    return next({
      log: `transactController.deleteTransact: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in transactController.deleteTransact.' },
    });
  }
};

transactController.updateTransact = async (req, res, next) => {
  try {
    console.log(req.params.name);
    const { name } = req.params;
    console.log('this is in the req.params in updateTransact', name);
    // something special here is that if you want to edit/update multiple items, you have to use $set{}
    console.log(/*'this is the req.body in updateTransact',*/ req.body);
    const updateTransact = await Transaction.findOneAndUpdate(
      { name: req.params.name },
      {
        $set: {
          name: req.body.name,
          date: req.body.date,
          amount: req.body.amount,
          entry: req.body.entry,
          transactionComplete: req.body.transactionComplete,
          people: req.body.people,
          eventName_id: req.body.eventName_id,
        },
      }
    );
    console.log('this is after findOneAndUpdate', updateTransact)
    res.locals.updateTransact = updateTransact;
    return next();
  } catch (err) {
    return next({
      log: `transactController.updateTransact: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in transactController.updateTransact.' },
    });
  }
};

module.exports = transactController;
