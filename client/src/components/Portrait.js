
import React, { Component } from 'react';

class Portrait extends Component {
  constructor(props) {
    super(props);
    
    this.renderPortrait = this.renderPortrait.bind(this)
  }

  renderPortrait() {
    if (!this.props.portrait)
      return
    
    return (
      <div>
        <h1>{this.props.portrait.name} by {this.props.portrait.artist}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.portrait.file }}></div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.renderPortrait()
        }
      </div>
    );
  }
}

export default Portrait;
