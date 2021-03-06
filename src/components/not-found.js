import React, { Component } from "react";
import pageNotFound from "../assets/img/page-not-found.png";

export class NotFound extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <img className="not-found" alt="not found" src={pageNotFound} />
        </div>
      </div>
    );
  }
}

export default NotFound;
