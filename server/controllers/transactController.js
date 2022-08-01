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
<<<<<<< HEAD
    const { name, date, amount, entry, transactionComplete, people, eventName_id } = req.body;
    // using object destructing.  

    console.log('this is the req.body', req.body);
    // we are creating an transaction with info from req.body and saving it to transactionMaker.  This info gets sent back to the front
    const transactionMaker = await Transaction.create({ name, date, amount, entry, transactionComplete, people, eventName_id });

=======
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
>>>>>>> dev

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

module.exports = transactController;
