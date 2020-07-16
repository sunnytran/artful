import React, { Component } from 'react';

class Customers extends Component {
  constructor() {
    super();

    this.state = {
      portraitSvg: null
    };

    this.fetchPortrait = this.fetchPortrait.bind(this)
  }

  componentDidMount() {
    this.fetchPortrait()
  }

  fetchPortrait() {
    fetch('/api/portrait')
      .then(res => res.text())
      .then(res => {
        console.log(res)
        this.setState({
          portraitSvg: res
        })
      })
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.portraitSvg }} />
      </div>
    );
  }
}

export default Customers;
