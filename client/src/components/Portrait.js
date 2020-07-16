import React, { Component } from 'react';

class Customers extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      artist: null,
      portraitSvg: null
    };

    this.fetchPortrait = this.fetchPortrait.bind(this)
  }

  componentDidMount() {
    this.fetchPortrait()
  }

  fetchPortrait() {
    fetch('/api/portrait')
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res.name,
          artist: res.artist,
          portraitSvg: res.file
        })
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name} by {this.state.artist}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.portraitSvg }} />
      </div>
    );
  }
}

export default Customers;
