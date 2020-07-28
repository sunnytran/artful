
import React, { Component } from 'react';
import Portrait from './components/Portrait';
import PortraitGenerator from './utils/PortraitGenerator';
import Palette from './components/Palette';

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

              <div class="columns is-centered is-vcentered is-mobile">
                

                <div class="column is-narrow">

                  <span class="subtitle has-text-left">
                    <span class="is-italic">
                      {this.state.currentPortrait.name}&nbsp;
                    </span>
                    by {this.state.currentPortrait.artist}
                  </span>
                  <Portrait currentColor={this.state.currentColor} colors={this.state.colors} portrait={this.state.currentPortrait} />

                  <div class="columns">
                    <div class="column">
                      <a href="#" onClick={this.handleNewPortrait}>Get a new portrait</a>
                      &nbsp;|&nbsp;
                      <span>Choose a color and click on a spot to paint it. Right click to erase!</span>
                    </div>
                  </div>

                  <div class="columns">
                    <div class="column is-half">
                      { this.renderKey() }
                    </div>
                    <div class="column is-half">
                      <Palette portrait={this.state.currentPortrait} colors={this.state.colors} handleClick={this.handleNewColor} />
                    </div>
                  </div>

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
