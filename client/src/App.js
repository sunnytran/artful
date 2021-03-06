import React, { Component } from "react";
import Portrait from "./components/Portrait";
import PortraitGenerator from "./utils/PortraitGenerator";
import Palette from "./components/Palette";
import Factoid from "./components/Factoid";

import "./bulma.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: {},
      portraits: [],
      currentPortrait: null,
      currentColor: null,
      finished: false,
    };

    this.finish = this.finish.bind(this);
    this.isFinished = this.isFinished.bind(this);
    this.handleNewPortrait = this.handleNewPortrait.bind(this);
    this.handleNewColor = this.handleNewColor.bind(this);
    this.renderKey = this.renderKey.bind(this);
  }

  componentDidMount() {
    fetch("/api/colors")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          colors: res,
        });
      });

    fetch("/api/portraits")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          portraits: res,
        });
      })
      .then(() => {
        this.getNewPortrait();
      });
  }

  finish() {
    this.setState({
      finished: true,
    });
  }

  isFinished() {
    return this.state.finished;
  }

  getNewPortrait() {
    var portrait = PortraitGenerator.generatePortrait(
      this.state.colors,
      this.state.portraits,
      this.state.currentPortrait
    );
    this.setState({
      currentPortrait: portrait,
      finished: false,
    });
  }

  handleNewPortrait() {
    this.getNewPortrait();
  }

  handleNewColor(color) {
    this.setState({
      currentColor: color,
    });
  }

  renderKey() {
    const keyData = this.state.currentPortrait.key;

    return (
      <div>
        <h2>
          <u>Color key</u>
        </h2>
        <ul>
          {Object.keys(keyData).map(function (k) {
            return (
              <li>
                {keyData[k]} : {k}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div class="noselect">
        {this.state.currentPortrait ? (
          <div>
            <div class="columns">
              <div class="column" style={{ paddingRight: "10px" }}>
                <div class="is-pulled-right" style={{ paddingTop: "20px" }}>
                  <div style={{ position: "fixed", left: "150px" }}>
                    <h1 class="title is-1" style={{ marginBottom: "5px" }}>
                      artful
                    </h1>
                    <div class="has-text-right">
                      <p>color by numbers</p>
                      <p>for masterpieces</p>
                      <span>
                        <a href="https://github.com/sunnytran" target="_blank">
                          my github
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-two-thirds" style={{ paddingLeft: "0px" }}>
                <div class="container">
                  <div
                    class="columns is-centered"
                    style={{ paddingTop: "20px" }}
                  >
                    <div class="column is-narrow">
                      <div>
                        <span class="subtitle has-text-left">
                          <span class="is-italic">
                            {this.state.currentPortrait.name}&nbsp;
                          </span>
                          by {this.state.currentPortrait.artist}
                        </span>

                        <span class="is-pulled-right">
                          <Factoid
                            key={this.state.currentPortrait.facts}
                            facts={this.state.currentPortrait.facts}
                          />
                        </span>
                      </div>

                      <Portrait
                        key={this.state.currentPortrait.name}
                        currentColor={this.state.currentColor}
                        colors={this.state.colors}
                        portrait={this.state.currentPortrait}
                        finish={this.finish}
                        isFinished={this.isFinished}
                      />

                      <div class="columns">
                        <div class="column">
                          <a href="#" onClick={this.handleNewPortrait}>
                            Get a new portrait
                          </a>
                          &nbsp;|&nbsp;
                          <span>
                            Choose a color and click on a spot to paint it.
                            Right click to erase!
                          </span>
                        </div>
                      </div>

                      <div class="columns">
                        <div class="column is-half">{this.renderKey()}</div>
                        <div class="column is-half">
                          <Palette
                            portrait={this.state.currentPortrait}
                            colors={this.state.colors}
                            handleClick={this.handleNewColor}
                            isFinished={this.isFinished}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column" />
            </div>

            {/* <div class="container">
                <div style={{paddingTop: '1.75%', marginLeft: '-8%', display: 'inline-block', position: 'fixed'}}>
                  <h1 class="title is-1" style={{marginBottom: '2px'}}>artful</h1>
                  <p class="is-pulled-right">color by numbers</p><br />
                  <p class="is-pulled-right">for masterpieces</p><br />
                  <span class="is-pulled-right"><a href="https://github.com/sunnytran" target="_blank">my github</a></span>
                </div>

                <div class="columns is-centered">

                  <div class="column is-narrow" style={{marginTop: '2.5%'}}>

                    <span class="subtitle has-text-left">
                      <span class="is-italic">
                        {this.state.currentPortrait.name}&nbsp;
                      </span>
                      by {this.state.currentPortrait.artist}
                    </span>
                    <span class="is-pulled-right">
                      <Factoid key={this.state.currentPortrait.facts} facts={this.state.currentPortrait.facts} />
                    </span>
                    
                    <Portrait
                      key={this.state.currentPortrait.name}
                      currentColor={this.state.currentColor}
                      colors={this.state.colors}
                      portrait={this.state.currentPortrait} 
                      finish={this.finish} 
                      isFinished={this.isFinished} />

                    <div class="columns">
                      <div class="column">
                        <a href="#" onClick={this.handleNewPortrait}>Get a new portrait</a>
                        &nbsp;|&nbsp;
                        <span>Choose a color and click on a spot to paint it. Right click to erase!</span>
                      </div>
                    </div>

                    <div class="columns">
                      <div class="column is-half">
                        { this.renderKey() }
                      </div>
                      <div class="column is-half">
                        <Palette portrait={this.state.currentPortrait} colors={this.state.colors} handleClick={this.handleNewColor} isFinished={this.isFinished} />
                      </div>
                    </div>

                  </div>
                </div>
              </div> */}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

{
  /* <Portrait
key={this.state.currentPortrait.name}
currentColor={this.state.currentColor}
colors={this.state.colors}
portrait={this.state.currentPortrait} 
finish={this.finish} 
isFinished={this.isFinished} /> */
}
