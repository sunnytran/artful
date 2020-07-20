import React, { Component } from 'react';

class Customers extends Component {
  constructor() {
    super();

    this.state = {
      portraits: [],
      name: '',
      artist: '',
      key: {},
      palette: [],
      svg: null
    }

    this.getNewPortrait = this.getNewPortrait.bind(this)
    this.shuffle = this.shuffle.bind(this)
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

  shuffle(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }

  getNewPortrait() {
    var portrait = this.state.portraits[Math.floor(Math.random() * this.state.portraits.length)]
    while (this.state.svg && this.state.name === portrait.name)
      portrait = this.state.portraits[Math.floor(Math.random() * this.state.portraits.length)]

    var colorsMap = {}
    var shuffledColors = this.shuffle(portrait.colors)
    for (var i = 0; i < shuffledColors.length; i++)
      colorsMap[shuffledColors[i]] = (i+1)

    if (!portrait.colors.includes('black'))
      portrait.colors.push('black')
    if (!portrait.colors.includes('white'))
      portrait.colors.push('white')

    for (var i = 0; i < portrait.colors.length; i++) {
      // console.log(portrait.colors[i] + " | " + this.props.colors[portrait.colors[i]].mixOf)
      const currentColor = portrait.colors[i]
      if (this.props.colors[currentColor].mixOf) {
        console.log(currentColor + " | " + this.props.colors[currentColor].mixOf + " | " + Math.floor(Math.random() * 5 + 1) )
      }
    }

    this.setState({
      name: portrait.name,
      artist: portrait.artist,
      svg: portrait.file,
      colors: portrait.colors,
      key: colorsMap,
      palette: portrait.colors
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
