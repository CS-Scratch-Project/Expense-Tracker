import { ReactDOM } from "react";
import React, { Component } from "react";

const TransactionCreater = () => {
// onClick function

  function transactionEvent(){
    // grabbing the text inputted to the form
    
  }

  return (
    <div className="transactionCreater">
      <div>
        <form className="eventInputForm">
          <input id="eventName" placeholder="new transaction name">
          </input>
          <button id="submitEvent">Create</button>
        </form>
      </div>

    </div>
  )
}

export default TransactionCreater