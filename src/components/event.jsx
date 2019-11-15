import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./event.css"

class Event extends Component {
/*  componentDidMount() {
      $('[rel="tooltip"]').on("click", function() {
        $(this).tooltip("hide");
      });
  }
*/
  handleAddButton = () => {
    this.setState({ event: this.state.event.count + 1 });
  };

  render() {
    return (
      <li className="row align-items-center">
        <div className="courses text-wrap col-lg-10 col-md-8 col-sm-10 col-xs-12">
          {this.props.event.name}
          <span className={this.setBadgeClasses()}>{this.formatCt()}</span>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-1 m-xs-0 p-xs-0">
          <div className="buttons-container d-flex justify-content-end">
            <button
              className="btn m-xs-0 p-xs-0 add-buttons d-inline-flex"
              onClick={() => this.props.onIncrement(this.props.event)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Add Event"
              data-trigger="hover"
            >
              <span className="fa fa-plus icon-2x"></span>
            </button>
            <button
              className="btn m-xs-0 p-xs-0 cancel-buttons d-inline-flex"
              onClick={() => this.props.onDelete(this.props.event.id)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Cancel Event"
              data-trigger="hover"
            >
              <span className="fa fa-trash icon-2x"></span>
            </button>
          </div>
        </div>
      </li>
    );
  }

  setBadgeClasses() {
    let badgeclasses = "badge badge-pill m-2 ";
    badgeclasses +=
      this.props.event.count === 0 ? "badge-danger" : "badge-dark";
    return badgeclasses;
  }

  formatCt() {
    const { count } = this.props.event;
    return count === 0 ? "Zero" : count;
  }
}

export default Event;
