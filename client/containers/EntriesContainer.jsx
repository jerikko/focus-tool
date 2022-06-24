import React, { Component } from 'react';
import { render } from 'react-dom';
import Entry from '../components/Entry.jsx';

class EntriesContainer extends Component {
  constructor(props) {
    super(props);
  };



  render() {
    return (
      <div className="entries-container">
        <h3>Entries container</h3>
        <Entry />
      </div>
    );
  };
};

export default EntriesContainer;