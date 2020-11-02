import React, { Component } from "react";
import { render } from "react-dom";
import Scene from "./scene";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      color: 0xff0000
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      color: Math.floor(Math.random() * 0xffffff)
    });
  }

  render() {
    return (
      <div style={styles}>
        <h3>Create React App Three.js Demo</h3>
        <button onClick={this.onClick}>
          Change Box Color : 0x{this.state.color.toString(16)}
        </button>
        <Scene color={this.state.color} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
