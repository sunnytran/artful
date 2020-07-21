
import React, { Component } from 'react';

class Portrait extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.portrait.name} by {this.props.portrait.artist}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.portrait.file }}></div>
      </div>
    );
  }
}

export default Portrait;
