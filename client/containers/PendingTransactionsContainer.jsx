import { ReactDOM } from 'react';
import React, { Component } from 'react';
import Event from '../components/Event.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
//hooks must be imported
//we need a fetch request that will pull all the events
//and transactions from the database
//this data will be used to create the state in this
//pending transactions container. This state will then be drilled
//into the events and transactions

const PendingTransactions = () => {
  //https://www.youtube.com/watch?v=4pO-HcG2igk
  //this is the useState hook, it uses array destructuring
  const [events, setEvents] = useState([]);
  //Events is whatever is first passed into useState
  //setting the Events to an empty array
  //then we can use the setEvents function to update the state
  //then when we call setEvents, it will fill the array with
  //whatever we pass in.
  const [transactions, setTransactions] = useState([]);
  //this is a useEffect hook:
  useEffect(() => {
    //useEffect is meant for side effects i.e. fetch requests
    //this logic is independent of the rendering
    const getData = async () => {
      try {
        //This endpoint has not been set yet
        const response = await fetch('/api/getevents');
        //once Katie sets up the backend ^^^ this endpoint will need
        //to be updated
        const data = await response.json();
        //console.log(data)
        //console.log(data)
        await setEvents(data);
        //wheneverwe use setEvents to change the state,
        //that will trigger React to re-render the component
      } catch (err) {
        console.log(`something went wrong: ${err}`);
      }
    };
    getData();
    //window.location.reload()  re-render the page
  }, []);
  // console.log(events);
  //Events should now contain all of the events
  //and transactions from our database
  //this useState hook can be used as many times as we want to
  //change the state
  // console.log(events[0].eventsAndTransac);
  // console.log(events[0])
  const eventList = events.map((eventObj, i) => {
    //console.log(eventObj.eventName);
    // console.log(eventObj.eventsAndTransact[0])
    // console.log(eventObj.eventsAndTransact[1])
    const eventSpecificTransactions = [];

    if (eventObj.eventsAndTransact[0]) {
      for (let i = 0; i < eventObj.eventsAndTransact.length; i++) {
        eventSpecificTransactions.push(eventObj.eventsAndTransact[i]);
      }
      // console.log(eventObj.eventsAndTransact[0]);
      // console.log(eventObj.eventsAndTransact[1]);
      // console.log(eventSpecificTransactions);
    }
    return (
      <Event
        key={eventObj.eventName}
        eventDescription={eventObj.eventDescription}
        eventName={eventObj.eventName}
        eventSpecificTransactions={eventSpecificTransactions}
      />
    );
  });

  eventList.reverse();
  return (
    <div className='pendingTransactions'>
      <h2>Pending Transactions</h2>
      {/* this is where all the events will render */}
      {eventList}
      {/* each transaction will in turn render within the event */}
    </div>
  );
};

export default PendingTransactions;
