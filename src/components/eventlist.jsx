import React, { Component } from "react";
import Event from "./event";

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
      <ul className="pl-sm-0 ml-sm-0 list-unstyled">{events}</ul>
    );
  }
}

export default EventList;




/*
{
  this.props.events.map(event => (
    <Event
      key={event.id}
      event={event}
      onCancel={this.props.onCancel}
      onIncrement={this.props.onIncrement}
    />
  ))
}
*/
