import React, { Component } from 'react';
import './App.css';
import Main from "./component/navigation/main";

class App extends Component {
  
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
