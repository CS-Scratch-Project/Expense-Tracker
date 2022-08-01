import { ReactDOM } from "react";
import React, { Component } from "react";



const Transaction = (props) => {
  //test to see if unique keys accessible 
    //assign the unique keys to the specific input box (Starting in 93)
    //id = {`name${props.uniqueId}`}
  // console.log(props.uniqueId) - to see uniqueId
  
  //set up a update transaction function
  function updateTransaction(){
    //grab all the relevant information in each of the specific edit fields
    const name = document.getElementById(`name${props.uniqueId}`).value;
    const date = document.getElementById(`date${props.uniqueId}`).value;
    const amount = document.getElementById(`amount${props.uniqueId}`).value;
    const entry = document.getElementById(`entry${props.uniqueId}`).value;
    const people = document.getElementById(`people${props.uniqueId}`).value;

    updateTransaction();
  }

  /* we can either perform the deletes here or in reducers - 
    function = () => {
      //for Delete...
        //1 - delete from state (?) run a search function for the specific id (which exist) and delete it from state...
        //2 - delete from database  
        //would be a findByIdAndDelete request
          //fetch 
    }
  */

  //On delete click:
//1.  Send delete request to server
//2.  Change local state to remove the transaction via UseState hook
//3.  UseEffect must be monitoring state from useState
//4.  When it notices a change it state, it send fetch request for data which will re-render transactions for that event/
  const deleteTransaction = async () => {
    console.log('deleteTransaction function fired');
    const settings = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/JSON'
      },
      //the specific unique id of the transaction from the transaction box
      // body: JSON.stringify(props.name),
    }
    try {     //the specific route and method 
      console.log(`/moreApis/:${props.name}`)
      const response = await fetch(`/moreApis/${props.name}`, settings)
      //moreApis/:rubber%20duckies
      //const correctRoute = props.name
      const data = await response.json()
      console.log(`delete response received: ${response} `)
    } catch (err) { 
      console.log('something went wrong when trying to delete transaction - on transaction component')
    }
    
    window.location.reload();
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
// console.log(props.name)
// console.log('hello')
  return (
    <div className="transactionBox" >
        <h4 className="transactTitle">{props.name}</h4>

      {/* <div><label htmlFor = 'name'>Name: </label><span> {props.name} </span></div> */}
      <div><label htmlFor = 'date'>Date: </label><span> {props.date} </span></div>
      <div><label htmlFor = 'amount'>Amount: </label><span> {props.amount} </span></div>
      <div><label htmlFor = 'entry'>Notes: </label><span> {props.entry} </span></div>
      <div><label htmlFor = 'people'>People: </label><span> {props.people} </span></div> 
      {/* Here we will need to have a function that calls for an useReducer function to update state
          As well as having a post request to the Database
      */}
      <button onClick={() => {}}> Complete </button>
      {/* <button onClick={() => {}}> Edit</button> */}
      <button onClick={() => {deleteTransaction()}}> Delete </button>
        {/* onclick={deleteTransaction} */}
        {/* //on click the user should be presented a rendered form - set a editState in this.state */}
          <div className = "editFrom-popup" id="editTrans">
          <form action = "/Update/transId" className="form-container">

            <label id = {`name${props.uniqueId}`} htmlFor="Edit"><b>Name</b> </label>
            <input type="text" defaultValue={props.name} required/>

            <label id = {`date${props.uniqueId}`} htmlFor="Edit"><b>Date</b> </label>
            <input type="date" defaultValue={props.date}  required/>
           
            <label id = {`amount${props.uniqueId}`} htmlFor="Edit"><b>Amount</b> </label>
            <input type="number" step="any" defaultValue={props.amount}  required/>

            <label id = {`entry${props.uniqueId}`} htmlFor="Edit"><b>Notes</b> </label>
            <input type="text" defaultValue={props.entry}  required/>

            <label id = {`people${props.uniqueId}`} htmlFor="Edit"><b>People</b> </label>
            <input type="text" defaultValue={props.people}  required/>

            

            <button type="update" className="btn">Update</button>
            <button type="button" className="btn cancel" onClick={()=> {}}>Close</button>
          </form>
          </div>
     
    </div>
    )
}

export default Transaction