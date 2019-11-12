import React from "react";

const TotalEnrollments = props => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Total Enrollments
        <span className="badge badge-pill badge-info">{props.totalEvents}</span>
      </a>
    </nav>
  );
};

export default TotalEnrollments;
