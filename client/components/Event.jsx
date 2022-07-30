import { ReactDOM } from "react";
import React, { Component } from "react";
import Transaction from "./Transaction.jsx"

const Event = () => {


  return (
    <div className="event">
      <h4>This is an event</h4>
      <Transaction />
      <Transaction />
    </div>
  )
}

export default Event