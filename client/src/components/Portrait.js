
import React, { Component } from 'react';
import SvgCompa from './SvgCompa'

class Portrait extends Component {
  constructor(props) {
    super(props);

    this.handlePaint = this.handlePaint.bind(this)
    this.toggleNumberVisibility = this.toggleNumberVisibility.bind(this)
    this.handleErase = this.handleErase.bind(this)
    this.isFilled = this.isFilled.bind(this)

    this.state = {
      paintedCells: []
    }
  }

  componentDidMount() {
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

    this.setState({
      hexDict: hexDict,
      mixDict: mixDict
    })
  }

  toggleNumberVisibility(e) {
    var pathId = e.target.id.substr(e.target.id.indexOf("_") + 1)
    var arr = e.target.parentElement.children
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === "text_" + pathId) {
        if (!arr[i].getAttribute('display'))
          arr[i].setAttribute('display', 'none')
        else
          arr[i].setAttribute('display', null)
        break
      }
    }
  }

  handlePaint(e) {
    if(!this.props.currentColor || !e.target.attributes.getNamedItem('fill'))
      return

    var hexColor = this.props.colors[this.props.currentColor].hex

    var currentPaletteColor = this.state.hexDict[hexColor]
    var currentCellColor = this.state.hexDict[e.target.attributes.getNamedItem('fill').value]
    var determinedColor = hexColor
    
    var pathId = e.target.id.substr(e.target.id.indexOf("_") + 1)
    if (currentPaletteColor === currentCellColor && this.state.paintedCells.includes(pathId))
      return

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
            mixedColor = this.state.mixDict[[currentPaletteColor, currentCellColor]]
          
          determinedColor = this.props.colors[mixedColor].hex
    } else if (currentCellColor !== 'white') {
      // any color with "light" in it will be broken down (this includes pink and cream, which is essentially light red and light yellow)
      // at this point, you should have three colors. if more, then no.
      // check if those three colors alone match an entry in the dictionary
      // if not, mix the two colors that aren't white and see if the resulting color along with white match an entry (this accounts for light colors)
      
      var mixOfCell = [currentCellColor] 
      var mixOfPalette = [currentPaletteColor]

      if (this.props.colors[currentCellColor].mixOf)
        mixOfCell = this.props.colors[currentCellColor].mixOf.slice()
      else if (this.props.colors[currentPaletteColor].mixOf)
        mixOfPalette = this.props.colors[currentPaletteColor].mixOf.slice()

      if (mixOfCell.length + mixOfPalette.length === 3) {
        var threeColors = mixOfCell.slice()
        threeColors.push.apply(threeColors, mixOfPalette)
        threeColors.sort()

        if (this.state.mixDict[threeColors]) {
          determinedColor = this.props.colors[this.state.mixDict[threeColors]].hex
        } else if (threeColors.includes("white")) {
          threeColors.splice(threeColors.indexOf("white"), 1)
          if (this.state.mixDict[threeColors]) {
            var mixedColor = this.state.mixDict[threeColors]
            var finalMixCheck = [mixedColor, 'white']
            finalMixCheck.sort()

            if (this.state.mixDict[finalMixCheck]) {
              determinedColor = this.props.colors[this.state.mixDict[finalMixCheck]].hex
            }
          }
        }
      }
    }

    e.target.attributes.getNamedItem('fill').value = determinedColor;
    this.toggleNumberVisibility(e)

    if (!this.state.paintedCells.includes(pathId))
      this.setState(prevState => ({
        paintedCells: [...prevState.paintedCells, pathId]
      }), () => { console.log(this.state.paintedCells) })
  }

  handleErase(e) {
    var id = e.target.id.substr(e.target.id.indexOf("_") + 1)

    if (!e.target.attributes.getNamedItem('fill'))
      return
    if (!this.isFilled(id))
      return
    e.target.attributes.getNamedItem('fill').value = this.props.colors["white"].hex;
    this.toggleNumberVisibility(e)

    var tmp = this.state.paintedCells
    tmp.splice(tmp.indexOf(id), 1);
    this.setState({ paintedCells: tmp })
    console.log(this.state.paintedCells)
  }

  isFilled(id) {
    return this.state.paintedCells.includes(id)
  }

  render() {
    return (
      <div>
        <SvgCompa handlePaint={this.handlePaint} handleErase={this.handleErase} onContextMenu={(e)=> e.preventDefault()}></SvgCompa>
      </div>
    );
  }
}

export default Portrait;
