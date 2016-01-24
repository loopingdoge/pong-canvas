import React from 'react';
import Counter from './counter';

var Home = React.createClass({

  render() {
    return (
      <div className="hero-unit">
        <h1>Erik Culo!</h1>
        <p>E Matte terrone.<br/></p>
        <Counter tickInterval="16"/>
      </div>
    );
  }
});

export default Home;