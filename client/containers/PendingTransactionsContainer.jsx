import { ReactDOM } from "react";
import React, { Component } from "react";
import Event from "../components/Event.jsx"
import { useState } from 'react';
import { useEffect } from "react";
//hooks must be imported
//we need a fetch request that will pull all the events 
//and transactions from the database
//this data will be used to create the state in this 
//pending transactions container. This state will then be drilled
//into the events and transactions

const PendingTransactions = () => {
  //https://www.youtube.com/watch?v=4pO-HcG2igk
  //this is the useState hook, it uses array destructuring
  const [initialState, setState] = useState([])
  //initialState is whatever is first passed into useState
  //setting the initialState to an empty array
  //then we can use the setState function to update the state
  //then when we call setState, it will fill the array with
  //whatever we pass in.
  //this is a useEffect hook:
  useEffect(() => {
  //useEffect is meant for side effects i.e. fetch requests
  //this logic is independent of the rendering
      const getData = async () =>  {
        try {
          //This endpoint has not been set yet
          const response = await fetch('/api/Favs')
          //once Katie sets up the backend ^^^ this endpoint will need
          //to be updated
          const data = await response.json()
          //console.log(data)
          setState(data)
          //console.log(state)
        } catch (err) {
          console.log(`something went wrong: ${err}`)
        }
      }
      getData()
    }, [])
    //initialState should now contain all of the events 
    //and transactions from our database
    //this useState hook can be used as many times as we want to 
    //change the state
  return (
    <div className="pendingTransactions">
      <h2>Pending Transactions</h2>
      {/* this is where all the events will render */}
      <Event />
      {/* each transaction will in turn render within the event */}
    </div>
  )
}



export default PendingTransactions;
