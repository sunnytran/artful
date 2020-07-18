import React, { Component } from 'react';

class Customers extends Component {
  constructor() {
    super();

    this.state = {
      portraits: [],
      name: '',
      artist: '',
      colors: {},
      svg: null
    }

    this.getNewPortrait = this.getNewPortrait.bind(this)
  }

  componentDidMount() {
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
    var portrait = this.state.portraits[Math.floor(Math.random() * this.state.portraits.length)]
    while (this.state.svg && this.state.name === portrait.name)
      portrait = this.state.portraits[Math.floor(Math.random() * this.state.portraits.length)]

    // automatically include black and white for brightening and darkening colors
    // this should be last, number everything and stuff before this
    portrait.colors.black = '#000000'
    portrait.colors.white = '#ffffff'
    console.log(portrait.colors)

    this.setState({
      name: portrait.name,
      artist: portrait.artist,
      svg: portrait.file,
      colors: portrait.colors
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name} by {this.state.artist}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.svg }} />
      </div>
    );
  }
}

export default Customers;

{/* <div style={{transform:`scale(0.5)`}}>
<svg width="82" height="82">
      <rect x="1" y="1" width="100" height="100" stroke="black" stroke-width="2" fill="white"/>
      <text fill="black" x="10" y="30">FooBarBaz</text>
</svg>
</div> */}
