import React, { Component } from "react";
import HideButton from "./HideButton";

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

  // makeInvisible = () => {
  //   // console.log("button is working");
  //   this.setState({
  //     visible: false,
  //   });
  // };

  ///make another component for displaying the users
  //reccomend to keep digging into react js
  //name, thumbnail, show and hide the details

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Users ", this.state.users.results)
  // }

  render() {
    return (
      <ul>
        {this.state.users.map((user, indx) => (
          <li key={indx}>
            <h2 className="first__Name">{user.name.first}</h2>
            <p className="gender__line">{user.gender}</p>
            <address>
              <h1 className="user__Name">{user.login.username}</h1>
              <img src={user.picture.thumbnail} className="user__Img"></img>
              <HideButton />
              {/* {this.state.visible ? {} : null}
              <button
                onClick={() => {
                  this.setState({ visible: false });
                }}
              >
                HIDE
              </button> */}
            </address>
          </li>
        ))}
      </ul>
    );
  }
}

export default Users;
