import React from 'react';
import Ball from './ball';
import Rx from 'rx';


var Home = React.createClass({

	getInitialState() {
    return {
      framerate: Rx.Observable.interval(16).timeInterval()
    };
  },

	componentDidMount() {

	},

  render() {
    return (
      <Ball canvasId="canvas"/>
      <Ball canvasId="canvas" framerate={this.state.framerate}/>
    );
  }
});

export default Home;