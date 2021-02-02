import React, { Component } from "react";

class HideButton extends Component {
  onClick = (event) => {
    console.log("THE BUTTON WAS CLICKED!!!!", event);
  };

  render() {
    return (
      <div>
        <button className="btn__btn" onClick={this.onClick}>
          HIDE
        </button>
      </div>
    );
  }
}

export default HideButton;
