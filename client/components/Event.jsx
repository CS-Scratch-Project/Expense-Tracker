import { ReactDOM } from 'react';
import React, { Component } from 'react';
import Transaction from './Transaction.jsx';
import TransactionCreator from './CreateNewTransaction.jsx';

// const Event = () => {

// //{}
//   return (
//     <div className="event">
//       <h4>This is an event</h4>
//       <TransactionCreater />
//       <Transaction />
//       <Transaction />
//     </div>
//   )
// }

// date = {transactionObj.date} amount = {transactionObj.amount} entry= {transactionObj.entry} transactionComplete = {transactionObj.transactionComplete} people = {transactionObj.people} eventName_id = {transactionObj.eventName_id}

class Event extends Component {
  constructor(props) {
    super(props);
  }

  // const [state, setState] = useState([])

  // useEffect(() => deleteEvent = async (eventName) => {
  //   const response = await fetch(`/api/${eventName}`,
  //   {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "Application/JSON",
  //     }, 
  //   }), []});



  render() {
    //console.log(this.props);
    // console.log(this.props.eventSpecificTransactions);
    // this is what we prop drilled from pendingTransactionsContainer
    // we are checking if the eventSpecificTransactions works
    // if this event has transaction, it will render everything here
    if(this.props.eventSpecificTransactions[0]){
      // console.log(this.props.eventSpecificTransactions)
      // we are only prop drilling the transactions that we need, and we are mapping then to the transaction object
      const transactionList = this.props.eventSpecificTransactions.map(
        (transactionObj, i) => { // transactionObj is each individual transaction
          // console.log(transactionObj);
            return (
              <Transaction
                name={transactionObj.name}
                date={transactionObj.date}
                amount={transactionObj.amount}
                entry={transactionObj.entry}
                transactionComplete={transactionObj.transactionComplete}
                people={transactionObj.people}
                eventName_id={transactionObj.eventName_id}
                uniqueId={transactionObj._id}
                key = {transactionObj._id}
              />
            );

        }
      );

      // const uniqueKey = {key: transactionObj._id}
      // this return is inside the conditional that will render all events
      return (
        <div className='event'>
          <h4>{this.props.eventName}</h4>
          <p>{this.props.eventDescription}</p>
          <TransactionCreator eventName_id = {this.props.eventName} />
          {transactionList.reverse()}
          <button
            type="deleteEventButton"
            className="deleteEventButton"
            onClick={() => {
              this.deleteEvent();
            }}>
            Delete Event
        </button>
        </div>
      );
    }
  //else return- this will render all events outside having no transactions
  return (
    <div className='event'>
      <h4>{this.props.eventName}</h4>
      <p>{this.props.eventDescription}</p>
      <TransactionCreator eventName_id = {this.props.eventName} />
      <button
        type="deleteEventButton"
        className="deleteEventButton"
        onClick={() => {
          this.deleteEvent();
        }}>
        Delete Event
      </button>
    </div>
  );
  }
}

export default Event;
