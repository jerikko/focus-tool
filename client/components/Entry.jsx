import React, { Component } from 'react';
import { render } from 'react-dom';

class Entry extends Component {
  constructor(props) {
    super(props);
  };



  render() {
    // let completedOrDeleted = this.props.input.completed_or_deleted[0].toUpperCase() + this.props.input.completed_or_deleted.slice(1);

    return (
      <div className="entry" style={styles.container}>
        <h4>Entry</h4>
        <p>User ID: {this.props.input.user_id}</p>
        <p>Input: {this.props.input.input}</p>
        <p>Status: {this.props.input.active ? 'Active' : 'Inactive' }</p>
        <p>Priority Level: {this.props.input.priority}</p>
        <p>Reason: {this.props.input.reason}</p>
        <p>Type: {this.props.input.type}</p>
        <p>Completed or Deleted? {this.props.input.completed_or_deleted}</p>
      </div>
    );
  };
};

const styles = {
  container: {
    border: '1px solid red',
    width: '100%',
    background: '#c5f0d0',
    color: 'black',
    boxSizing: 'border-box'
  },
};

export default Entry;