import { ReactDOM } from "react";
import React, { Component } from "react";


const Transaction = (props) => {

  /* we can either perform the deletes here or in reducers - 
    function = () => {
      //for Delete...
        //1 - delete from state (?) run a search function for the specific id (which exist) and delete it from state...
        //2 - delete from database  
        //would be a findByIdAndDelete request
          //fetch 
    }
  */

  
  const deleteTransaction = async () => {
    console.log('deleteTransaction function fired');
    console.log('hello');
    const settings = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/JSON'
      },
      //the specific unique id of the transaction from the transaction box
      body: JSON.stringify(TRANSACTION._id),
    }
    try {
      //the specific route and method 
      const response = await fetch('/api/deleteTrans', settings)
      const data = await response.json()
      console.log(`delete response received: ${response} `)
      //this is a post request to make a new event, so we dont need to 
      //do anything with the response
    } catch (err) { 
      console.log('something went wrong when trying to delete transaction - on transaction component')
    }
  }


  //assuming we will be prop drilling and we will access information from props

/*  EVENTS
    eventName: String,
    eventDescription: String, 

    TRANSACTIONS 
    name: String,
    date: String,
    amount: Number,
    entry: String,
    transactionComplete: Boolean,
    people: String, 
    eventName_id: String, 
    
*/
console.log(props.name)
console.log('hello')
  return (
    <div className="transactionBox" >
        <h4>{props.name}</h4>

      {/* <div><label htmlFor = 'name'>Name: </label><span> {props.name} </span></div> */}
      <div><label htmlFor = 'date'>Date: </label><span> {props.date} </span></div>
      <div><label htmlFor = 'amount'>Amount: </label><span> {props.amount} </span></div>
      <div><label htmlFor = 'entry'>Notes: </label><span> {props.entry} </span></div>
      <div><label htmlFor = 'people'>People: </label><span> {props.people} </span></div> 
      {/* Here we will need to have a function that calls for an useReducer function to update state
          As well as having a post request to the Database
      */}
      <button onClick={() => {}}> Complete </button>
      <button onClick={() => {}}> Edit</button>
        {/* 
          <div class = "editFrom-popup" id="editTrans">
          <form action = "/Update/transId" class="form-container">
            <label for="name"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>

            <label for="date"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit" class="btn">Login</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
          </form>
          </div> */}
      <button onClick={() => {}}> Delete </button>
    </div>
    )
}

export default Transaction