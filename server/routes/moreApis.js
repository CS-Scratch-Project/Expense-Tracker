// require the express library
const express = require('express');

// bringing in our middleware
const transactController = require('../controllers/transactcontroller');

// bringing in our moreRouter for our transactRouter by invoking Router() and bringing in our router- purely for organization
const moreRouter = express.Router();

// need a  get request to render our current transact at our / endpoint
// sending this info from to fetch on the front end and go to the middleware (and the db), which gets back to the send request
moreRouter.get(
  '/',
  //transactController.test,
  transactController.showTransacts,
  (req, res) => {
    return res.status(200).json(res.locals.allTransacts);
  }
);

moreRouter.post('/addtransact', transactController.addTransact, (req, res) => {
  return res.status(200).json(res.locals.transactionMaker);
});

module.exports = moreRouter;
