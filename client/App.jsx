import { ReactDOM } from "react";
import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx"
import CreateNewEventContainer from "./containers/CreateNewEventContainer.jsx"
import PendingTransactionsContainer from "./containers/PendingTransactionsContainer.jsx"


class App extends Component {
  render(){
    return(
      <div className="app">
        <Navbar/>
        <h1>Expense Tracker</h1>
        <PendingTransactionsContainer />
      </div>
    );
  }
}

export default App;
