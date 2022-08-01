import { ReactDOM } from 'react';
import React, { Component } from 'react';
import Transaction from './Transaction.jsx';
import TransactionCreater from './CreateNewTransaction.jsx';

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
        <h4>{this.props.eventName}</h4>
        <p>{this.props.eventDescription}</p>
        <TransactionCreater />
        {transactionList.reverse()}
      </div>
    );
    }
    return (
      <div className='event'>
        <h4>{this.props.eventName}</h4>
        <p>{this.props.eventDescription}</p>
        <TransactionCreater />
        {/* <Transaction />
        <Transaction /> */}
      </div>
    );
  }
}

export default Event;
