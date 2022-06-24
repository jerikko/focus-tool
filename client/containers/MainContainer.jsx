import React, { Component } from 'react';
import { render } from 'react-dom';
import EntriesContainer from './EntriesContainer.jsx';
import FormContainer from './FormContainer.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  };



  render() {
    return (
      <div className="main-container">
        <EntriesContainer />
        <FormContainer />
      </div>
    );
  };
};

export default MainContainer;