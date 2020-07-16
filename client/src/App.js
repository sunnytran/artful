
import React, { Component } from 'react';
import Portrait from './components/Portrait';

class App extends Component {

  constructor(props) {
    super(props)

    this.portraitRef = React.createRef()

    this.handleNewPortrait = this.handleNewPortrait.bind(this)
  }

  handleNewPortrait() {
    this.portraitRef.current.fetchPortrait()
  }

  render() {
    return (
      <div>
        <h1>artful</h1>
        <Portrait ref={this.portraitRef} />
        <button type="button" onClick={this.handleNewPortrait}>New portrait</button>
      </div>
    );
  }

}

export default App;
