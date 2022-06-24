import React, { Component } from 'react';
import { render } from 'react-dom';

class FormContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="form-container">
        <h4>New Entry:</h4>
      </div>
    );
  };
};

export default FormContainer;