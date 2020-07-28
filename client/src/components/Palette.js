
import React, { Component } from 'react';

class Palette extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.portrait.palette.map(i => {
              return (
                <svg width="50" height="50" onClick={() => {this.props.handleClick(i)}}>
                  <rect width="50" height="50" fill={this.props.colors[i].hex}/>
                </svg>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Palette;
