
import React, { Component } from 'react';
import SvgCompa from './SvgCompa'

class Portrait extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    // console.log(e.target.attributes.getNamedItem('fill').value)
    var hexColor = this.props.colors[this.props.currentColor].hex

    if (e.type == 'click')
      e.target.attributes.getNamedItem('fill').value = hexColor;
    if (e.nativeEvent.which === 3) {
      console.log("HELLO")
      e.target.attributes.getNamedItem('fill').value = '#fff'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.portrait.name} by {this.props.portrait.artist}</h1>
        <SvgCompa handleClick={this.handleClick}></SvgCompa>
      </div>
    );
  }
}

export default Portrait;
