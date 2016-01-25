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
		const ctx = this.state.ctx;
		ctx.moveTo(0,0);
		ctx.lineTo(300,150);
		ctx.stroke();
	},

	render(){
		return null;
	}

});

export default Bar;