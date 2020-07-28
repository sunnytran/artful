
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
              return <li>
                <a onClick={() => {this.props.handleClick(i)}} href="#">
                  {i}
                </a>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Palette;
