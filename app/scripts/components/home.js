import React from 'react';
import Ball from './ball';

var Home = React.createClass({

  render() {
    return (
      <Ball canvasId="canvas"/>
    );
  }
});

export default Home;