import React, { Component } from "react";
import TotalEnrollments from "./components/totalenrolls";
import EventList from "./components/eventlist";
import events from "./events.json";
import "./App.css";

class App extends Component {

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
