
import React, { Component } from 'react';
import SvgCompa from './SvgCompa'

class Portrait extends Component {
  constructor(props) {
    super(props);
    
    const colors = this.props.colors

    var hexDict = {}
    Object.keys(this.props.colors).forEach(function(key) {
      hexDict[colors[key].hex] = key
    })

    var mixDict = {}
    Object.keys(this.props.colors).forEach(function(key) {
      if (colors[key].mixOf)
        mixDict[colors[key].mixOf] = key
      else
        mixDict[key] = key
    })

    this.state = {
      hexDict: hexDict,
      mixDict: mixDict
    }

    this.handlePaint = this.handlePaint.bind(this)
    this.handleErase = this.handleErase.bind(this)
  }

  handlePaint(e) {
    // console.log(e.target.attributes.getNamedItem('fill').value)
    var hexColor = !this.props.currentColor ? this.props.colors["white"].hex :
      this.props.colors[this.props.currentColor].hex

    var currentPaletteColor = this.state.hexDict[hexColor]
    var currentCellColor = this.state.hexDict[e.target.attributes.getNamedItem('fill').value]
    var determinedColor = hexColor
    
    if (currentPaletteColor === 'white' && currentCellColor === 'black') {
      determinedColor = this.props.colors["gray"].hex
    } else if (currentPaletteColor === 'white' && this.props.colors["light " + currentCellColor]) {
      determinedColor = this.props.colors["light " + currentCellColor].hex
    } else if (currentPaletteColor === 'black' && this.props.colors["dark " + currentCellColor]) {
      determinedColor = this.props.colors["dark " + currentCellColor].hex
    } else if (currentPaletteColor === 'white' && currentCellColor.includes("dark")) {
      determinedColor = this.props.colors[currentCellColor.substring(currentCellColor.indexOf("dark") + 5)].hex
    } else if (currentPaletteColor === 'black' && currentCellColor.includes("light")) {
      determinedColor = this.props.colors[currentCellColor.substring(currentCellColor.indexOf("light") + 6)].hex
    } else if (currentCellColor !== 'white' && currentCellColor !== 'black' &&
        (this.state.mixDict[[currentCellColor, currentPaletteColor]] || this.state.mixDict[[currentPaletteColor, currentCellColor]])) {
      var mixedColor = this.state.mixDict[[currentCellColor, currentPaletteColor]]
      if (!mixedColor)
        this.state.mixDict[[currentPaletteColor, currentCellColor]]
      
      determinedColor = this.props.colors[mixedColor].hex
    }

    e.target.attributes.getNamedItem('fill').value = determinedColor;
  }

  handleErase(e) {
    e.target.attributes.getNamedItem('fill').value = this.props.colors["white"].hex;
  }

  render() {
    return (
      <div>
        <h1>{this.props.portrait.name} by {this.props.portrait.artist}</h1>
        <SvgCompa handlePaint={this.handlePaint} handleErase={this.handleErase} onContextMenu={(e)=> e.preventDefault()}></SvgCompa>
      </div>
    );
  }
}

export default Portrait;
