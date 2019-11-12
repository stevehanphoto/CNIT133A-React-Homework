import React, { Component } from "react";
import TotalEnrollments from "./components/totalenrolls";
//import LstCounters from "./components/lstcounters";
import EventList from "./components/eventlist";
import events from "./events.json";
import "./App.css";

class App extends Component {
/*  state = {
    events: [
      { id: 1, name: "", value: 0 },
      { id: 2, name: "", value: 0 },
      { id: 3, name: "", value: 0 },
      { id: 4, name: "", value: 0 }
    ]
  };*/
  constructor()
  {
    super();
    this.state = { events };
    this.state.events.map(event => { event['count'] = 0; return event;});
    console.log("In Constructor", this.state.events);
  };

  handleAddButton = event => {
    const tempevents = [...this.state.events];
    const i = tempevents.indexOf(event);
    tempevents[i] = { ...event };
    tempevents[i].count++;
    this.setState({ events: tempevents });
  };

  handleCancelButton = eventsId => {
    const tempevents = this.state.events.filter(event => 
      event.id !== eventsId);
    this.setState({ events: tempevents });
  };

  render() {
    return (
      <React.Fragment>
        <TotalEnrollments
          totalEvents={this.state.events
            .map(event => event.count)
            .reduce((prev, next) => prev + next)}
        />
        <main className="container">
          <EventList
            events={this.state.events}
            onDelete={this.handleCancelButton}
            onIncrement={this.handleAddButton}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
