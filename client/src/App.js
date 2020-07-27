
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
        <h2><u>Color key</u></h2>
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
                    <span class="is-italic">
                      {this.state.currentPortrait.name}&nbsp;
                    </span>
                    by {this.state.currentPortrait.artist}
                  </h2>
                  
                  <Portrait currentColor={this.state.currentColor} colors={this.state.colors} portrait={this.state.currentPortrait} />
                </div>
              </div>

              <div>
                <a href="#" onClick={this.handleNewPortrait}>Get a new portrait</a>
                &nbsp;|&nbsp;
                <span>Click on a color to pick it. Left click a spot to paint it and right click to erase!</span>
              </div>
              
              <div class="columns">
                <div class="column is-half">
                  { this.renderKey() }
                </div>
                <div class="column is-half">
                  { this.renderPalette() }
                </div>
              </div>     
            </div> :
            null
        }
      </div>
    );
  }

}

export default App;
