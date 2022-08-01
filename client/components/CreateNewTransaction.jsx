import { ReactDOM } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";


const TransactionCreater = () => {
// onClick create new transaction 
   function newTransaction(){
    // grabbing the text inputted to the form
    const name = document.getElementById('name').value
    console.log(name)
    // const newName = document.getElementById('name')
    // console.log(newName)
    const date = document.getElementById('date').value
    console.log(date)
    const amount = document.getElementById('amount').value
    console.log(amount)
    const entry = document.getElementById('entry').value
    console.log(entry)
    const people = document.getElementById('people').value
    console.log(people)
    // const eventName_id = document.getElementById('eventName_id').value
    const eventName_id = 'rubber duckies'
    const body = {
      name,
      date,
      amount,
      entry,
      transactionComplete: false,
      people,
      eventName_id
    }
    // console.log(body)
    //asyc function to make post request
    console.log('make new transactions')
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
        const response = await fetch('/moreapis/addtransact', settings)
        const data = await response.json()
        //this is a post request to make a new transaction event, so we dont need to 
        //do anything with the response
      } catch (err) { 
        console.log('something went wrong with the Create New Transaction post request')
      }
    }
    // console.log(body)
    postEvent()
  }
  


  
 
  return (
    <div className="transactionCreater">
      <h1>New Transaction Creator</h1>
      <div>
        <form className="eventInputForm">
          {/* <input id="eventName_id" placeholder="Event name">
          </input> */}
          <input id="name" placeholder="item name ">
          </input>
          <input id="date" placeholder="day of Event">
          </input>
          <input id="amount" placeholder="amount">
          </input>
          <input id="entry" placeholder="entry">
          </input>
          <input id="people" placeholder="name of peoples">
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