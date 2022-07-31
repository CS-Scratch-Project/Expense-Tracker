import { ReactDOM } from "react";
import React, { Component } from "react";

const TransactionCreater = () => {
// onClick create new transaction 

   function newTransaction(){
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
    //asyc function to make post request
    console.log('make new transactions function')
    const postEvent = async () => {
      const settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(body)
      }
      try {
        // waiting for katie to make end point
        const response = await fetch('', settings)
        const data = await response.json()
        //this is a post request to make a new transaction event, so we dont need to 
        //do anything with the response
      } catch (err) { 
        console.log('something went wrong with the Create New Transaction post request')
      }
    }
  }
  newTransaction()


  

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