import React, { Component } from 'react';
// import { render } from 'react-dom';
import MainContainer from './containers/MainContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Focus Tool inside of App.jsx</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;