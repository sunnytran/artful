
import React, { Component } from 'react';
import ArrayShuffler from '../utils/ArrayShuffler';

class Factoid extends Component {
  constructor(props) {
    super(props);

    var facts = ArrayShuffler.shuffle(this.props.facts)

    this.state = {
      factIndex: 0,
      intervalId: null,
      facts: facts
    }

    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 10 * 1000)
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer() {
    var tmpIndex = this.state.factIndex
    ++tmpIndex
    tmpIndex %= this.state.facts.length
    
    this.setState({
      factIndex: tmpIndex
    })
  }
  
  render() {
    return (
      <div>
        <b>FACT: </b>
        {this.state.facts[this.state.factIndex]}
      </div>
    )
  }
}

export default Factoid;
