import React, { Component, useState } from "react";
import "..styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, started: false };
    this.timerIntervalId  = 0;
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.ballMovement);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.ballMovement);
  }


  startGame = () => {
    this.setState({
      started: true,
    });
   this.timerIntervalId =  setInterval(this.timer,1000);
  };

  timer = () => {
this.setState({
  time: this.state.time + 1
})
  }

  ballMovement = (event) => {
    if (!this.state.started) return;
    let x = this.state.x;
    let y = this.state.y;
    if (event.keyCode === 37) {
      x -= 5;
    } else if (event.keyCode === 38) {
      y -= 5;
    } else if (event.keyCode === 39) {
      x += 5;
    } else if (event.keyCode === 40) {
      y += 5;
    }
    if(x === 250 && y === 250){
      clearInterval(this.timerIntervalId);
      document.removeEventListener('keydown', this.ballMovement);
    }
    this.setState({
      x: x,
      y: y,
    });
  };

  render() {
    return (
      <>
        {!this.state.started ? (
          <button className = "start" onClick={this.startGame}>Start</button>
        ) : (
          <div>
            <div className = "heading-timer">{this.state.time}</div>
            <div
              className="ball"
              style={{ top: this.state.y, left: this.state.x }}
            ></div>
            <div className="hole"></div>
          </div>
        )}
      </>
    );
  }
}

export default Timer;
