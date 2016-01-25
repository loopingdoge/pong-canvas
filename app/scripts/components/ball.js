import React from 'react';
import Rx from 'rx';

var Ball = React.createClass({

  getInitialState() {
    return {
      ctx: document.getElementById(this.props.canvasId).getContext("2d"),
      x: 0,
      y: 0
    };
  },

  componentDidMount() {
    const ctx = this.state.ctx;
    const framerate = this.props.framerate;

    ctx.beginPath();
    ctx.arc(75, 75, 12, 0, 2 * Math.PI);
    ctx.fill();

    framerate.subscribe(() => console.log('strunz'));
  },

  render() {
    return null;
  }
});

export default Ball;