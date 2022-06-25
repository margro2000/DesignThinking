import React from "react";
import { Button} from 'reactstrap';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import './DecisionButton.css'

function DecisionButton(props) {
	return (
		<a href={props.link}>
		<Button className="DecisionButton" style={props.buttonStyle} variant="contained">{props.buttonContent}</Button>
		 </a>
	);
}

export default DecisionButton;
