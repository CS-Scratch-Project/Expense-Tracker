import { ReactDOM } from "react";
import React, { Component } from "react";
import Transaction from "./Transaction.jsx"
import TransactionCreater from "./CreateNewTransaction.jsx";

const Event = () => {


  return (
    <div className="event">
      <h4>This is an event</h4>
      <TransactionCreater />
      <Transaction />
      <Transaction />
    </div>
  )
}

export default Event