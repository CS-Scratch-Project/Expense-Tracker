import { ReactDOM } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";


const TransactionCreater = () => {
// onClick create new transaction 

   function newTransaction(){
    // grabbing the text inputted to the form

    const name = document.getElementById('name').value
    const date = document.getElementById('date').value
    const amount = document.getElementById('amount').value
    const entry = document.getElementById('entry').value
    const transactionComplete = document.getElementById('transactionComplete').value
    const people = document.getElementById('people').value
    const eventName_id = document.getElementById('eventName_id').value

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
    postEvent()
  }
  


  
 
  return (
    <div className="transactionCreater">
      <h1>New Transaction Creator</h1>
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
          <Link to="/">
          <button id="submitEvent" onClick={newTransaction}>Create</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default TransactionCreater