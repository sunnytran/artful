
import React, { Component } from 'react';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state ={
      currentColor: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    if (this.props.isFinished())
      return

    this.setState({
      currentColor: i
    })

    this.props.handleClick(i)
  }

  render() {
    return (
      <div>
        {
          this.props.portrait.palette.map(i => {
            if (this.state.currentColor !== i)
              return (
                <svg width="50" height="50" onClick={() => {this.handleClick(i)}}>
                  <rect x="0" y="0" width="50" height="50" fill={this.props.colors[i].hex} />
                </svg>
              )
            else
              return (
                <svg width="50" height="50" onClick={() => {this.handleClick(i)}}>
                  <rect x="5" y="5" width="40" height="40" fill={this.props.colors[i].hex}/>
                </svg>
              )
          })
        }
      </div>
    )
  }
}

export default Palette;
