import React, { Component } from "react";
import Event from "./event";
import "./eventlist.css"

class EventList extends Component {
  render() {
    const events =
      this.props.events.map(event => {
      return <Event 
          key={event.id} 
          event={event} 
          onDelete={this.props.onDelete} 
          onIncrement={this.props.onIncrement} 
      />
    });
    const eventslist = (this.props.events.length > 0) ?
        <ul className="events-container list-unstyled">{events}</ul> :
        <h5 className="pt-2 pl-2">There is no event available.</h5>;
    return (
      <div className="eventslist-container">
        <h2>Events/Courses</h2>
        <hr />
        {eventslist}
      </div>
    );
  }
}

export default EventList;
