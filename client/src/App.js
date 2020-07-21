
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

  render() {
    return (
      <div>
        <h1>artful</h1>
        <Portrait colors={this.state.colors} portrait={this.state.currentPortrait} />
        <button type="button" onClick={this.handleNewPortrait}>New portrait</button>
      </div>
    );
  }

}


export default App;
