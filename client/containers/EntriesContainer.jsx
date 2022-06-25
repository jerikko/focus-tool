import React, { Component } from 'react';
import { render } from 'react-dom';
import Entry from '../components/Entry.jsx';

class EntriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: []
    }
    this.request = this.request.bind(this);
  };

  request() {
    fetch(this.props.allInputsUrl)
      .then(response => response.json())
      .then(data => {console.log(data);this.setState({inputs: [...data]})})
      .catch(err => console.log('Error in EntriesContainer: ', err));
  };



  render() {
    if (this.state.inputs.length === 0) this.request();
    const arrInputs = [];
    for (let i = 0; i < this.state.inputs.length; i++) {
      arrInputs.push( < Entry id={this.state.inputs[i]._id} input={this.state.inputs[i]} /> );
    }

    return (
      <div className="entries-container">
        <h3>Entries Container:</h3>
        {arrInputs}
      </div>
    );
  };
};

export default EntriesContainer;