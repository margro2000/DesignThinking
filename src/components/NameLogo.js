import React from "react";
import './NameLogo.css'


function NameLogo (props) {
	return (
		<div className="NameLogo">
		<img className="teamAvatar" src={props.img} alt="alt"/>
		<p> {props.content} </p>
		</div>
	);
}

export default NameLogo;
