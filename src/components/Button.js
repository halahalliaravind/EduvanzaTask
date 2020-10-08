import React from 'react';
import { Button as MuiButton } from "@material-ui/core";


const Button = (props) => {
	console.log(props.style);
	return(
	<MuiButton 
		style= {props.style} 
		onClick= {props.action} > 
		{props.title} 
	</MuiButton>)
}


export default Button;