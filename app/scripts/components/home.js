import React from 'react';
import Ball from './ball';
import Bar from './bar';

import Rx from 'rx';


var Home = React.createClass({

	getInitialState() {
    return {
      canvas: document.getElementById('canvas'),
      ctx: canvas.getContext("2d"),
      framerate: Rx.Observable.interval(16).timeInterval(),
      drawables: []
    };
  },

	componentDidMount() {
    const framerate = this.state.framerate;
    const drawables = [];
    drawables.push(Ball());
    this.setState({drawables: drawables})
    framerate.subscribe(this.drawAll);
	},

  drawAll() {
    this.state.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.state.drawables.map((drawable) => {
      drawable.draw();
    });
  },

  render() {
    return null;
  }
});

export default Home;