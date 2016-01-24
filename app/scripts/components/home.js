import React from 'react';

var Counter = React.createClass({
  getInitialState() {
      return {
          count: 0
      };
  },

  componentDidMount() {
    setInterval(this.tick, this.props.tickInterval);    
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

// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         'Browserify',
//         'Babel'
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="hero-unit">
//         <h1>'Allo, 'Allo!</h1>
//         <p>This is a React component.<br/>
//            You now also have:</p>
//         <ul>{this.state.items.map(this.renderItem)}</ul>
//       </div>
//     );
//   }

//   renderItem(item, index) {
//     return <li key={index}>{item}</li>;
//   }
// }
