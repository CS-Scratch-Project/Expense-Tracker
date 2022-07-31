const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const secretURI = require('../../secrets');
const URI = secretURI.URI;

mongoose
  .connect(URI)
  //     {
  //     useNewUrlPArser: true,
  //     userUnifiedTopology: true,
  //     dbName: 'Project',
  // }
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(`Error connecting to Mongo DB: ${err}`));

const eventSchema = new Schema({
  eventName: {
    type: String,
    unique: true,
    required: true,
  },
  eventDescription: String,
});

const Event = mongoose.model('Event', eventSchema);

const transactionSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  entry: String,
  transactionComplete: { type: Boolean, required: true },
  people: String,
  eventName_id: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = {
  Event,
  Transaction,
};
