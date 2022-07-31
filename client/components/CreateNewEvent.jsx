import { ReactDOM } from "react";
import React, { Component } from "react";

const EventCreator = () => {
/*
this is the onclick function
*/
  function makeEvent() {
    //first grab the text inputted into the form
    const eventName = document.getElementById('eventName')
    const eventDescription = document.getElementById('eventDescription')

    const body = {
      eventName,
      eventDescription
    }
    //this is the async function that will make the post request to 
    //send the new event to the db
    console.log('makeEvent function')
    const postEvent = async () => {
      const settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(body)
      }
      try {
        const response = await fetch('/api/addevent', settings)
        const data = await response.json()
        //this is a post request to make a new event, so we dont need to 
        //do anything with the response
      } catch (err) { 
        console.log('something went wrong with the Create New Event post request')
      }
    }
  }
  makeEvent()
  
  return (
    <div className="eventCreator">
      <div>
        <form className="eventInputForm">
          <input id="eventName" placeholder="event name">
          </input>
          <input id="eventDescription" placeholder="event description">
          </input>
          <button id="submitEvent" onClick={makeEvent}>Create</button>
        </form>
      </div>

    </div>
  )
}

export default EventCreator