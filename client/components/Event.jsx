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

// date = {transactionObj.date} amount = {transactionObj.amount} entry= {transactionObj.entry} transactionComplete = {transactionObj.transactionComplete} people = {transactionObj.people} eventName_id = {transactionObj.eventName_id}

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const [transactions, setTransactions] = useState([]);
    // useEffect(() => {
    //   const getData = async () => {
    //     try {
    //       const response = await fetch('/api'); //figure out the end route
    //       const data = await response.json();
    //       setTransactions(data);
    //     } catch (err) {
    //       console.log(`something went wrong: ${err}`);
    //     }
    //   };
    //   getData();
    // }, []);

    // const transactionList = transactions.map((transactionObj, i) => {
    //   return (
    //     <Transaction
    //       key={transactionObj.name}
    //       name={transactionObj.name}
    //       date={transactionObj.date}
    //       amount={transactionObj.amount}
    //       entry={transactionObj.entry}
    //       transactionComplete={transactionObj.transactionComplete}
    //       people={transactionObj.people}
    //       eventName_id={transactionObj.eventName_id}
    //     />
    //   );
    // });
    console.log(this.props.eventName);
    console.log(this.props.eventDescription);
    return (
      <div className='event'>
        <h4>{this.props.eventName}</h4>
        <p>{this.props.eventDescription}</p>
        <TransactionCreater />
        {/* <Transaction />
        <Transaction /> */}
        {/* {transactionList} */}
      </div>
    );
  }
}

export default Event;
