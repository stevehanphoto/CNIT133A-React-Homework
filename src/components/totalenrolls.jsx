import React from "react";
import "./totalenrolls.css";

const TotalEnrollments = props => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Total Enrollments
        <span className="badge badge-pill badge-light m-1">{props.totalEvents}</span>
      </a>
    </nav>
  );
};

export default TotalEnrollments;
