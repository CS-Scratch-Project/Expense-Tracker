import { ReactDOM } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";


const TransactionCreator = (props) => {
// onClick create new transaction 
   function newTransaction(){
    // grabbing the text inputted to the form
    // console.log(props.uniqueKey)
    const name = document.getElementById(`name${props.eventName_id}`).value
    // console.log(props.name)
    const date = document.getElementById(`date${props.eventName_id}`).value
    // console.log(date)
    const amount = document.getElementById(`amount${props.eventName_id}`).value
    // console.log(amount)
    const entry = document.getElementById(`entry${props.eventName_id}`).value
    // console.log(entry)
    const people = document.getElementById(`people${props.eventName_id}`).value
    // console.log(people)
    const eventName_id = props.eventName_id;
    // console.log(eventName_id)
    const body = {
      name,
      date,
      amount,
      entry,
      transactionComplete: false,
      people,
      eventName_id
    }
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
        const response = await fetch('/moreApis/addtransact', settings)
        const data = await response.json()
        //this is a post request to make a new transaction event, so we dont need to 
        //do anything with the response
      } catch (err) { 
        console.log('something went wrong with the Create New Transaction post request')
      }
    }
    // console.log(body)
    postEvent()
    window.location.reload();
  }
  
  return (
    <div className="transactionCreator">
      <h1>New Transaction Creator</h1>
      <div>
        <form className="eventInputForm">
          <input id={`name${props.eventName_id}`} placeholder="Transaction name ">
          </input>
          <input type="date" id={`date${props.eventName_id}`}>
          </input>
          <input id={`amount${props.eventName_id}`} placeholder="Amount">
          </input>
          <input id={`entry${props.eventName_id}`} placeholder="Description">
          </input>
          <input id={`people${props.eventName_id}`} placeholder="Names">
          </input>
          <Link to="/">
          <button id="submitEvent" onClick={newTransaction}>Create</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default TransactionCreator