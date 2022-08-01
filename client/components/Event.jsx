import { ReactDOM } from "react";
import React, { Component } from "react";
import Transaction from "./Transaction.jsx"
import TransactionCreater from "./CreateNewTransaction.jsx";

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
    super(props)
    
  }

  //const transactionList = []

  render() {
    // console.log(this.props.eventName);
    // console.log(this.props.eventDescription);
    return (
      <div className="event">
        <h4>{this.props.eventName}</h4>
        <p>{this.props.eventDescription}</p>
        <TransactionCreater />
        <Transaction />
        <Transaction />
      </div>
    )
  }
}

export default Event