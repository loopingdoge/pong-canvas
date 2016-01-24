import React from 'react';
import Rx from 'rx';

var Counter = React.createClass({
  getInitialState() {
    return {
      ctx: document.getElementById(this.props.canvasId).getContext("2d"),
      x: 0,
      y: 0
    };
  },

  componentDidMount() {
    
  },

  render() {
    return null;
  }
});

export default Counter;