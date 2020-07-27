
import React, { Component } from 'react';
import Portrait from './components/Portrait';
import PortraitGenerator from './utils/PortraitGenerator';

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      colors: {},
      portraits: [],
      currentPortrait: null,
      currentColor: null
    }

    this.handleNewPortrait = this.handleNewPortrait.bind(this)
    this.handleNewColor = this.handleNewColor.bind(this)
    this.renderPalette = this.renderPalette.bind(this)
    this.renderKey = this.renderKey.bind(this)
  }

  componentDidMount() {
    fetch('/api/colors')
    .then(res => res.json())
    .then(res => {
      this.setState({
        colors: res
      })
    })

    fetch('/api/portraits')
    .then(res => res.json())
    .then(res => {
      this.setState({
        portraits: res
      })
    })
    .then(() => {
      this.getNewPortrait()
    })
  }

  getNewPortrait() {
    var portrait = PortraitGenerator.generatePortrait(this.state.colors, this.state.portraits, this.state.currentPortrait)
    this.setState({
      currentPortrait: portrait
    })
  }

  handleNewPortrait() {
    this.getNewPortrait()
  }

  handleNewColor(color) {
    this.setState({
      currentColor: color
    })
  }

  renderPalette() {
    return (
      <div>
        <h2>Your palette</h2>
        <ul>
          {
            this.state.currentPortrait.palette.map(i => {
              return <li>
                <a onClick={() => {this.handleNewColor(i)}} href="#">
                  {i}
                </a>
              </li>
            })
          }
        </ul>
      </div>
    )
  }

  renderKey() {
    const keyData = this.state.currentPortrait.key

    return (
      <div>
        <h2>Color key</h2>
        <ul>
        {
          Object
            .keys(keyData)
            .map(function(k) {
              return <li>{keyData[k]} : {k}</li>
            })
        }
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.currentPortrait ?
            <div class="container">
              <h1 class="title">artful</h1>

              <div class="has-text-centered">
                <div class="is-inline-block">
                  <h2 class="subtitle has-text-left">
                    {this.state.currentPortrait.name} by {this.state.currentPortrait.artist}
                  </h2>
                  
                  <Portrait currentColor={this.state.currentColor} colors={this.state.colors} portrait={this.state.currentPortrait} />
                </div>
              </div>

              <button type="button" onClick={this.handleNewPortrait}>New portrait</button>
              { this.renderKey() }
              <h4>Click on a color to pick it. Left click a cell to paint and right click to erase.</h4>
              { this.renderPalette() }     
            </div> :
            null
        }
      </div>
    );
  }

}

export default App;
