
import React, { Component } from 'react';

class Portrait extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const svgComponent = () => {
<svg width="200" height="200"> 
  <circle cx="80" cy="80" r="50"
  stroke="black" stroke-width="2" fill="grey" /> 
</svg> 
    }

    return (
      <div>
        <h1>{this.props.portrait.name} by {this.props.portrait.artist}</h1>
        <svgComponent></svgComponent>
        {/* <div dangerouslySetInnerHTML={{ __html: this.props.portrait.file }}></div> */}
      </div>
    );
  }
}

export default Portrait;
