import React, { Component } from 'react';
import { render } from 'react-dom';
import EntriesContainer from './EntriesContainer.jsx';
import FormContainer from './FormContainer.jsx';

const activeInputs = 'http://localhost:8080/api/active-inputs';
const allInputs = 'http://localhost:8080/api/all-inputs';

class MainContainer extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <div className="main-container" style={styles.container}>
        <EntriesContainer allInputsUrl={allInputs}/>
        <FormContainer />
      </div>
    );
  };
};

const styles = {
  container: {
    color: 'white',
    border: '1px solid black',
    background: '#9ea6f7',
    boxSizing: 'border-box'
  }
}

export default MainContainer;