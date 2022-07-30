import { ReactDOM } from "react";
import React, { Component } from "react";

const EventCreator = () => {


  return (
    <div className="eventCreator">
      <div>
        <form className="eventInputForm">
          <input id="eventName" placeholder="event name">
          </input>
          <button id="submitEvent">Create</button>
        </form>
      </div>

    </div>
  )
}

export default EventCreator