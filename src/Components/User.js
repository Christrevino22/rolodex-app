import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, indx) => (
            <li key={indx}> {user} </li>
          ))}
        </ul>
        );
      </div>
    );
  }
}

export default User;
