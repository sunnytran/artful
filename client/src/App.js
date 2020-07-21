
import React, { Component } from 'react';
import Portrait from './components/Portrait';
import PortraitGenerator from './utils/PortraitGenerator';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      colors: {},
      portraits: [],
      currentPortrait: null
    }

    this.handleNewPortrait = this.handleNewPortrait.bind(this)
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

  renderPalette() {
    return (
      <div>
        <h2>Your colors</h2>
        <ul>
          {
            this.state.currentPortrait.palette.map(i => {
              return <li>{i}</li>
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
              return <li>{k} : {keyData[k]}</li>
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
            <div>
              <h1>artful</h1>
              <Portrait colors={this.state.colors} portrait={this.state.currentPortrait} />
              <button type="button" onClick={this.handleNewPortrait}>New portrait</button>
              { this.renderPalette() }
              { this.renderKey() }
            </div> :
            null
        }
      </div>
    );
  }

}

export default App;
