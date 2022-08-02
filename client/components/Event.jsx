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

// this is a class component

class Event extends Component {
  constructor(props) {
    super(props);
  }

  //const transactionList = []

  render() {
    // console.log(this.props.eventSpecificTransactions);
    if(this.props.eventSpecificTransactions[0]){
    // console.log(this.props.eventSpecificTransactions)
    const transactionList = this.props.eventSpecificTransactions.map(
      (transactionObj, i) => {
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
            />
          );

      }
    );
    return (
      <div className='event'>
        <h4 className='eventName'>{this.props.eventName}</h4>
        <p>{this.props.eventDescription}</p>
        <TransactionCreater />
        {transactionList.reverse()}
      </div>
    );
    }
    
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
  async deleteEvent() {
    const settings = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/JSON'
      },
    }
    try {     //the specific route and method 
      console.log('this is in deleteEvent', this.props.eventName);
      const response = await fetch(`/api/${this.props.eventName}`, settings)
      //i give up . it works.
      const data = await response.json()
      console.log(`delete response received: ${data} `)
    } catch (err) { 
      console.log('something went wrong when trying to delete transaction - on transaction component')
    }
    window.location.reload();
  }
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
              // nerf this
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
        onClick={() => {this.deleteEvent()}}>
        Delete Event
      </button>
    </div>
  );
  }
}

export default Event;
