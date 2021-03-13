import React, { Component } from "react";
// import HideButton from "./HideButton";
// import HideButton from "./HideButton";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedIn: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results }));
  }

  componentWillUpdate() {
    console.log("****component did updated", this.state.users);
  }

  handleClick = () => {
    // console.log("this buttonw was clicked ");
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  ///make another component for displaying the users
  //reccomend to keep digging into react js
  //name, thumbnail, show and hide the details

  // NEW TODOS TP FINISH THIS PROJECT
  //ALL THIS HAS TO DO WITH PROPS!!!!!!!
  //LOOK FURTHER INTO PROPS!!!!!!!F
  //FIGURE OUT HOW TO MOVE OVER ALL THE USERS INTO ONE USER COMPONENT AND GIVE IT THE PROPS
  //MAKE A BUTTON THAT HIDE AND SHOWS THE USERS

  componentDidUpdate(prevProps, prevState) {
    console.log("Users ", this.state.users);
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <ul>
          {this.state.users.map((user, indx) => (
            <li key={indx}>
              <h2 className="first__Name">{user.name.first}</h2>
              <p className="gender__line">{user.gender}</p>
              <address>
                <h1 className="user__Name">{user.login.username}</h1>
                <img src={user.picture.thumbnail} className="user__Img"></img>
              </address>
              <button onClick={this.handleClick}> HIDE </button>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul>
          {this.state.users.map((user, indx) => (
            <li key={indx}>
              <h1 className="user__Name">{user.login.username}</h1>
              <button onClick={this.handleClick}> HIDE </button>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Users;
