import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, indx) => (
            <li key={indx}>
              <h2 className="first__Name">{user.name.first}</h2>
              <p className="gender__line">{user.gender}</p>
              <address>
                <h1 className="user__Name">{user.login.username}</h1>
                <img src={user.picture.thumbnail} className="user__Img"></img>
                {/* <HideButton /> */}
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
      </div>
    );
  }
}

export default User;
