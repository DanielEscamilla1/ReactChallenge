import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      persons: [
        {
          name: "Daniel",
          number: "123456789",
          dateOfBirth: "March 27",
        },
        {
          name: "Derik",
          number: "987654321",
          dateOfBirth: "October 3",
        },
        {
          name: "Francisco",
          number: "000000000",
          dateOfBirth: "January 11",
        },
        {
          name: "Esau",
          number: "33333333",
          dateOfBirth: "November 27",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <BasicInfo persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
