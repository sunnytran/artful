
import React, { Component } from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';

class Portrait extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    alert("HELLO")
  }

  render() {
    return (
      <div>
        <h1>{this.props.portrait.name} by {this.props.portrait.artist}</h1>
        
        <SvgLoader svgXML={this.props.portrait.file}>
          <SvgProxy selector="text" fill="red" onclick={this.handleClick} />
        </SvgLoader>
        {/* <div dangerouslySetInnerHTML={{ __html: this.props.portrait.file }}></div> */}
      </div>
    );
  }
}

export default Portrait;
