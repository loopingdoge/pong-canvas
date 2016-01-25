import React from 'react';


var Bar = React.createClass({

	getInitialState() {
		return {
			ctx: document.getElementById(this.props.canvasId).getContext("2d"),
			startX: 0,
			starty: 0,
			width: 10,
			heigt: 50
		};
	},

	componentDidMount(){
		const ctx = this.state.ctx;
		
		ctx.rect(this.state.startX, this.state.startY, this.state.width,this.state.heigt);
		ctx.stroke();
	},

	render(){
		return null;
	}

});

export default Bar;