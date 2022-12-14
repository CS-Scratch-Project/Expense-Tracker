import { ReactDOM } from "react";
import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx"
import CompletedTransactions from "./CompletedTransactionsContainer.jsx"

class Archive extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <div className="app">
        <Navbar />
        <CompletedTransactions />
      </div>
    );
  }
}

export default Archive;
