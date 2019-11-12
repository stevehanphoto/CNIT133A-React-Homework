import React, { Component } from "react";

class Event extends Component {
  handleAddButton = () => {
    this.setState({ event: this.state.event.count + 1 });
  };

  render() {
    return (
      <li className="row">
        <div className="col-6">
          <span className={this.setBadgeClasses()}>{this.formatCt()}</span>
          <span>{this.props.event.name} {this.props.event.count}</span>
        </div>
        <div className="col-6 m-xs-0 p-xs-0">
          <button
            onClick={() => this.props.onIncrement(this.props.event)}
            className="btn btn-primary btn-sm">
            Add
            </button>
          <button
            onClick={() => this.props.onDelete(this.props.event.id)}
            className="btn btn-warning btn-sm m-sm-3 m-xs-0">
            Cancel Event
          </button>
        </div>
      </li>
    );
  }
  //          onCancel={this.props.onCancel}
  //onIncrement = { this.props.onIncrement } />

  setBadgeClasses() {
    let badgeclasses = "badge m-3";
    badgeclasses +=
      this.props.event.count === 0 ? "badge-danger" : "badge-info";
    return badgeclasses;
  }

  formatCt() {
    const { count } = this.props.event;
    return count === 0 ? "Zero" : count;
  }
}

export default Event;
