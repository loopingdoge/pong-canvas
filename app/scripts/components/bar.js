import React from 'react';


var Bar = React.createClass({

  getInitialState() {
    return {
      ctx: document.getElementById(this.props.canvasId).getContext("2d"),
      x: 0,
      y: 0
    };
  },

	componentDidMount(){
		this.state.ctx.moveTo(0,0);
		this.state.ctx.lineTo(300,150);
		this.state.ctx.stroke();
	},

	render(){
		return(null);
	};

});
export default Bar;