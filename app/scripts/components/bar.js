import React from 'react';


var Bar = React.createClass({

	getInitialState() {
		return {
			ctx: document.getElementById(this.props.canvasId).getContext("2d"),
			startX: 0,
			startY: 0,
			width: 10,
			heigt: 50
		};
	},

	componentDidMount(){
		const ctx = this.state.ctx;
		var X =this.state.startX;
		var Y = this.state.startY;
		var width = this.state.width;
		var heigt = this.state.heigt;
		ctx.fillRect(X, Y, width, heigt);
		

		window.addEventListener("keydown", checkKeyPressed, false);
 
		function checkKeyPressed(e) {
		    if (e.keyCode == "38") {
						ctx.clearRect(X,Y, width, heigt);
		        Y = Y-10;
						ctx.fillRect(X, Y, width, heigt);
		    }
				if (e.keyCode == "40") {
		        ctx.clearRect(X,Y, width, heigt);
		        Y = Y+10;
						ctx.fillRect(X, Y, width, heigt);
		    }
		}

	},

	render(){
		return null;
	}

});

export default Bar;