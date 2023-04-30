import React, { Component } from "react";
import { Alert } from "reactstrap";

class Partici extends Component {
  render() {
    return (
      <div>
        <h1 className="fw-light fs-4 text-center mt-4 d-flex mx-auto">
          Participants
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="black"
            class="bi bi-columns d-flex ms-auto"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z" />
          </svg>
        </h1>
        <hr />
        {this.props.data.map((item, index) => (
          <Alert color="light" key={index} className="mt-2">
            {item.source.name}
          </Alert>
        ))}
      </div>
    );
  }
}

export default Partici;
