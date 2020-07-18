
import React, { Component } from 'react';
import Portrait from './components/Portrait';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      colors: {}
    }

    this.portraitRef = React.createRef()

    this.handleNewPortrait = this.handleNewPortrait.bind(this)
  }

  componentWillMount() {
    fetch('/api/colors')
    .then(res => res.json())
    .then(res => {
      this.setState({
        colors: res
      })
    })
  }

  handleNewPortrait() {
    this.portraitRef.current.getNewPortrait()
  }

  render() {
    return (
      <div>
        <h1>artful</h1>
        <Portrait colors={this.state.colors} ref={this.portraitRef} />
        <button type="button" onClick={this.handleNewPortrait}>New portrait</button>
      </div>
    );
  }

}

export default App;
