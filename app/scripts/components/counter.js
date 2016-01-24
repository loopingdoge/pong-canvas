import React from 'react';
import Rx from 'rx';

var Counter = React.createClass({
  getInitialState() {
      return {
          count: 0
      };
  },

  componentDidMount() {
    //setInterval(this.tick, this.props.tickInterval);
    var framerate = Rx.Observable
      .interval(16)
      .timeInterval();

    framerate.subscribe(this.tick);
  },
  
  tick() {
    this.setState({count: ++this.state.count});
  },

  render() {
    return (
      <div className="Counter">
        <p>Counter: {this.state.count}</p>
        <button onClick={this.tick}>+</button>
      </div>
    );
  }
});

export default Counter;