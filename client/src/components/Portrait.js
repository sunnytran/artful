
import React, { Component } from 'react';
import SvgCompa from './SvgCompa'

class Portrait extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)

    const colors = this.props.colors
    var hexDict = {}
    Object.keys(this.props.colors).forEach(function(key) {
      hexDict[colors[key].hex] = key
    })

    this.state = {
      hexDict: hexDict
    }
    console.log(hexDict)
  }

  handleClick(e) {
    // console.log(e.target.attributes.getNamedItem('fill').value)
    var hexColor = !this.props.currentColor ? this.props.colors["white"].hex :
      this.props.colors[this.props.currentColor].hex

    var currentPaletteColor = this.state.hexDict[hexColor]
    var currentCellColor = this.state.hexDict[e.target.attributes.getNamedItem('fill').value]
    var determinedColor = hexColor
    
    if (currentPaletteColor === 'white' && currentCellColor === 'black') {
      determinedColor = this.props.colors["gray"].hex
    }

    if (e.type == 'click')
      e.target.attributes.getNamedItem('fill').value = determinedColor;
    if (e.nativeEvent.which === 3) {
      // supposed to be erase
      e.target.attributes.getNamedItem('fill').value = '#ffffff'
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
