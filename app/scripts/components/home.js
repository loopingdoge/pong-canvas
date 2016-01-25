import React from 'react';
import Ball from './ball';
import Bar from './bar';

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
    	<Bar canvasId="canvas" framerate={this.state.framerate}/>
      <Ball canvasId="canvas" framerate={this.state.framerate}/>
    );
  }
});

export default Home;