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
<<<<<<< HEAD
    	<Bar canvasId="canvas" framerate={this.state.framerate}/>
=======
      <Ball canvasId="canvas" framerate={this.state.framerate}/>
>>>>>>> origin/master
    );
  }
});

export default Home;