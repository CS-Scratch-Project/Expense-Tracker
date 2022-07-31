import { ReactDOM } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const CreateNewEvent = () => {
/*
this is the onclick function
*/console.log('this is the first line of createNewEvent');
  function makeEvent() {
    //first grab the text inputted into the form
    const eventName = document.getElementById('eventName').value
    const eventDescription = document.getElementById('eventDescription').value

    const body = {
      eventName,
      eventDescription
    }
    //this is the async function that will make the post request to 
    //send the new event to the db
    console.log(body)
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
        console.log('this is before the fetch request');
        const response = await fetch('/api/addevent', settings)
        console.log('this is after the fetch request');
        const data = await response.json()
        console.log(data)
        //this is a post request to make a new event, so we dont need to 
        //do anything with the response
      } catch (err) { 
        console.log('something went wrong with the Create New Event post request')
      }
    }
    postEvent()
  }
  
  //render(){ // added render
    return (
      <div className="eventCreator">
        <div>
          <form className="eventInputForm">
            <input id="eventName" placeholder="event name">
            </input>
            <input
              id="eventDescription"
              placeholder="event description">
            </input>
            <Link to="/">
            <button
              id="submitEvent"
              onClick={makeEvent}>Create</button>
              </Link>
          </form>
        </div>

      </div>
    )
  }
 //}

export default CreateNewEvent