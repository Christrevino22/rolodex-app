import { Component } from "react";
import "./App.css";
// import HideButton from "./Components/HideButton";
import Users from "./Components/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
        {/* <HideButton /> */}
      </div>
    );
  }
}

export default App;
