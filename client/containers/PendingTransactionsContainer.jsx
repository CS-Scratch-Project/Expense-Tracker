import { ReactDOM } from "react";
import React, { Component } from "react";
import Event from "../components/Event.jsx"

class PendingTransactions extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div className="pendingTransactions">
        <h2>Pending Transactions</h2>
        <Event />
        <Event />
      </div>
    );
  }
}

export default PendingTransactions;
