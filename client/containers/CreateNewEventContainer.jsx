import { ReactDOM } from "react";
import React, { Component } from "react";
import CreateNewEvent from "../components/CreateNewEvent.jsx"


class CreateNewEventContainer extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div className="eventCreatorContainer">
        <h3>Create a new event</h3>
        <span><CreateNewEvent/></span>
      </div>
    );
  }
}

export default CreateNewEventContainer;
