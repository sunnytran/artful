
import React, { Component, Suspense } from 'react';

import styled, { keyframes } from 'styled-components'

import Adam from './svgs/SvgAdam'
import Compa from './svgs/SvgCompa';
import Amgoth from './svgs/SvgAmgoth';

import AdamJpg from './adam.jpg';
import CompaJpg from './compa.jpg';
import AmgothJpg from './amgoth.jpg';

class Portrait extends Component {
  constructor(props) {
    super(props);

    this.preparePortrait = this.preparePortrait.bind(this)
    this.handlePaint = this.handlePaint.bind(this)
    this.handleErase = this.handleErase.bind(this)
    this.isFilled = this.isFilled.bind(this)
    this.showNumber = this.showNumber.bind(this)
    this.hideNumber = this.hideNumber.bind(this)
    this.verifyPainting = this.verifyPainting.bind(this)

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
      mixDict: mixDict,
      paintedCells: {},
      totalCells: -1,
      isFinshed: false
    }

    this.svgRef = React.createRef();
  }
  
  componentDidMount() {
    this.preparePortrait()
  }

  preparePortrait() {
    var ref = this.svgRef

    console.log(ref.current)
    if (!ref.current)
      return
    
    // start at 1 because first element is the entire outline of the portrait
    var children = ref.current.children
    this.setState({ totalCells: (children.length - 1) / 2 })
    
    for (var i = 1; i < children.length; i += 2) {
      var pathEle = children[i]
      if (!pathEle.attributes.truecolor)
        pathEle.setAttribute('truecolor', pathEle.attributes.fill.value)
      var hexFillColor = pathEle.attributes.truecolor.value
      var fillColor = this.state.hexDict[hexFillColor]
      pathEle.attributes.fill.value = this.props.colors["white"].hex
      
      var textEle = children[i].nextSibling
      textEle.attributes.display.value = 'block'
      if (textEle.children[0])
        textEle.children[0].innerHTML = this.props.portrait.key[fillColor]
    }
  }

  hideNumber(e, id) {
    var arr = e.target.parentElement.children
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === "text_" + id) {
        if (arr[i].getAttribute('display') === 'block')
          arr[i].setAttribute('display', 'none')
        break
      }
    }
  }

  showNumber(e, id) {
    var arr = e.target.parentElement.children

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === "text_" + id) {
        if (arr[i].getAttribute('display') === 'none')
          arr[i].setAttribute('display', 'block')
        break
      }
    }
  }

  verifyPainting() {
    for (var i = 1; i <= Object.keys(this.state.totalCells).length; i++)
      if (!this.state.paintedCells[i])
        return false
    
    return true
  }

  handlePaint(e) {
    if (this.state.isFinshed)
      return

    if(!this.props.currentColor || !e.target.attributes.getNamedItem('fill'))
      return

    var hexColor = this.props.colors[this.props.currentColor].hex

    var currentPaletteColor = this.state.hexDict[hexColor]
    var currentCellColor = this.state.hexDict[e.target.attributes.getNamedItem('fill').value]
    var determinedColor = hexColor
    
    var pathId = e.target.id.substr(e.target.id.indexOf("_") + 1)
    if (currentPaletteColor === currentCellColor && this.state.paintedCells.hasOwnProperty(pathId))
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
    this.hideNumber(e, pathId)

    var tmp = this.state.paintedCells
    tmp[pathId] = hexColor === e.target.attributes.getNamedItem('truecolor').value

    this.setState(prevState => ({
      paintedCells: tmp
    }), () => {
      console.log(Object.keys(this.state.paintedCells).length + " " + this.state.totalCells)
      if (Object.keys(this.state.paintedCells).length === this.state.totalCells && this.verifyPainting) {
        this.setState({
          isFinshed: true
        })
      }
    })
  }

  handleErase(e) {
    if (this.state.isFinshed)
      return

    var id = e.target.id.substr(e.target.id.indexOf("_") + 1)

    if (!e.target.attributes.getNamedItem('fill'))
      return
    if (!this.isFilled(id))
      return
    e.target.attributes.getNamedItem('fill').value = this.props.colors["white"].hex;
    this.showNumber(e, id)

    var tmp = this.state.paintedCells
    delete this.state.paintedCells[id]
    this.setState({ paintedCells: tmp })
  }

  isFilled(id) {
    return this.state.paintedCells.hasOwnProperty(id)
  }

  render() {
    var Portraits = {
      'SvgCompa.js': {
        js: Compa,
        jpg: CompaJpg
      },
      'SvgAdam.js': {
        js: Adam,
        jpg: AdamJpg
      },
      'SvgAmgoth.js': {
        js: Amgoth,
        jpg: AmgothJpg
      }
    }
    var Portrait = Portraits[this.props.portrait.file].js
    var Image = Portraits[this.props.portrait.file].jpg

    const Fade = keyframes`
      0% { opacity: 1; }
      20% { opacity: 0.9; }
      40% { opacity: 0.5; }
      60% { opacity: 0.3; }
      80% { opacity: 0; }
      100% { opacity: 0; }
    `
    const PortraitStyled = styled.div`
      animation: ${Fade} 2s linear infinite;
    `

    return (
      <div>
        <img src={Image} alt="Placeholder image" />
        <PortraitStyled>
          <Portrait
            class="is-overlay"
            svgRef={this.svgRef} {...this.props}
            handlePaint={this.handlePaint}
            handleErase={this.handleErase}
            onContextMenu={(e)=> e.preventDefault()} />
        </PortraitStyled>
      </div>
    );
  }
}

export default Portrait;
