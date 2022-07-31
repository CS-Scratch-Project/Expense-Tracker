import { ReactDOM } from "react";
import React, { Component } from "react";

const TransactionCreater = () => {
// onClick create new transaction 

  // function newTransaction(){
    // grabbing the text inputted to the form

    const name = document.getElementById('name')
    const date = document.getElementById('date')
    const amount = document.getElementById('amount')
    const entry = document.getElementById('entry')
    const transactionComplete = document.getElementById('transactionComplete')
    const people = document.getElementById('people')
    const eventName_id = document.getElementById('eventName_id')

    const body = {
      name,
      date,
      amount,
      entry,
      transactionComplete,
      people,
      eventName_id
    }



  }

  return (
    <div className="transactionCreater">
      <div>
        <form className="eventInputForm">
          <input id="eventName" placeholder="new transaction name">
          </input>
          <input id="name" placeholder="name ">
          </input>
          <input id="date" placeholder="day of Event">
          </input>
          <input id="amount" placeholder="amount">
          </input>
          <input id="entry" placeholder="cost">
          </input>
          <input id="transactionComplete" placeholder="completed transaction">
          </input>
          <input id="people" placeholder="name of people">
          </input>
          <button id="submitEvent" onClick={newTransaction}>Create</button>
        </form>
      </div>

    </div>
  )
}

export default TransactionCreater