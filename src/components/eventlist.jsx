import React, { Component } from "react";
import Event from "./event";
import "./eventlist.css"

class EventList extends Component {
  render() {
    const events = this.props.events.map(event => {
      return <Event 
          key={event.id} 
          event={event} 
          onDelete={this.props.onDelete} 
          onIncrement={this.props.onIncrement} 
      />;
    });
    return (
      <div className="eventslist-container">
        <h2>Events/Courses</h2>
        <hr />
        <ul className="events-container list-unstyled">{events}</ul>
      </div>
    );
  }
}

export default EventList;
