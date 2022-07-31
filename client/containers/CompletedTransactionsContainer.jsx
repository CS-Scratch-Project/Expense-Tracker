import { ReactDOM } from "react";
import React, { Component } from "react";
import Event from "../components/Event.jsx"


class CompletedTransactions extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div className="CompletedTransactions">
        <h1>Completed Transactions</h1>
        <Event />
        <Event />
      </div>
    );
  }
}

export default CompletedTransactions;
