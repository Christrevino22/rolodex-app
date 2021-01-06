import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results }));
  }

  ///make another component for displaying the users
  //reccomend to keep digging into react js
  //name, thumbnail, show and hide the details

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Users ", this.state.users.results)
  // }

  render() {
    return (
      <ul>
        {this.state.users.map((user) => (
          <li>
            <h2>{user.name.first}</h2>
            <p>{user.gender}</p>
            <address>
              <span>{}</span>
              <span>{}</span>
            </address>
          </li>
        ))}
      </ul>
    );
  }
}

export default Users;
