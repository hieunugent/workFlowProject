import React, { Component } from 'react';
import './App.css';
import Main from "./component/navigation/main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/database")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Main />
       {/* <p className="App-intro">{this.state.apiResponse}</p> */}
      </div>
    );
  }
}

export default App;
