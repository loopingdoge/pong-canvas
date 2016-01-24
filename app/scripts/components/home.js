import React from 'react';
import Ball from './ball';
import Bar from './bar';

var Home = React.createClass({

  render() {
    return (
    	<Bar canvasId="canvas"/>	
    	<Ball canvasId="canvas"/>
    );
  }
});

export default Home;