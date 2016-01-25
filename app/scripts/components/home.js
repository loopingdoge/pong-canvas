import React from 'react';
import Ball from './ball';
import Field from './field';
var Home = React.createClass({

  render() {
    return (
      <Ball canvasId="canvas"/>
      <Field canvasId="field"/>
    );
  }
});

export default Home;