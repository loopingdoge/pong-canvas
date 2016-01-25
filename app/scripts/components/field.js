import React from 'react';

var Field = React.createClass({

  getInitialState() {
    return {
      ctx: document.getElementById(this.props.canvasId).getContext('2d'),
      x: 0,
      y: 0
    };
  },

  componentDidMount() {
    const ctx = this.state.ctx;
    ctx.beginPath();
    ctx.rect(0,0,600,500);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.moveTo(0, 25);
    ctx.lineTo(650, 25);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'white';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 425);
    ctx.lineTo(650, 425);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'white';
    ctx.stroke();
    //antialiasing fix
    ctx.translate(0.5, 0.5);

    ctx.beginPath();
    ctx.setLineDash([9]);
    ctx.moveTo(300, 30);
    ctx.lineTo(300, 425);
    ctx.stroke();
  },

  render() {
    return null;
  }
});

export default Field;