
import React, { Component } from 'react';

class Portrait extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          console.log(this.props.portrait)
        }
        {/* <h1>{this.props.portrait.name} by {this.props.portrait.artist}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.potrait.svg }} /> */}
      </div>
    );
  }
}

export default Portrait;
