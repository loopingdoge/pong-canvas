import React from 'react';


var Bar = React.createClass({
	
	componentDidMount(){
		var ctx = this.props.canvas.getContext("2d");
		ctx.moveTo(0,0);
		ctx
	}

	render(){
		return(null);
	}

});
export default Bar;