import React, { Component } from 'react';

class Customers extends Component {
  constructor() {
    super();

    this.state = {
      portraits: [],
      name: '',
      artist: '',
      svg: null
    }

    this.getNewPortrait = this.getNewPortrait.bind(this)
  }

  componentDidMount() {
    console.log("IN DID MOUNT")
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

    this.setState({
      name: portrait.name,
      artist: portrait.artist,
      svg: portrait.file
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
