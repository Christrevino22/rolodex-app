import React, { Component } from "react";
import Users from "./Users";
import App from "../App";

class HideButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  // makeInvisible = () => {
  //   console.log("button is working");
  //   this.setState({
  //     visible: false,
  //   });
  // };

  render() {
    return (
      <div>
        {this.state.visible ? <Users /> : null}
        <button
          onClick={() => {
            this.setState({ visible: false });
          }}
        >
          HIDE
        </button>
      </div>
    );
  }
}

export default HideButton;
