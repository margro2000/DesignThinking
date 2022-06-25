import React from "react";
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import './TextBox.css'

function TextBox(props) {
	return (
		<input className="TextBox" type="text" name="name" placeholder={props.textPlaceholder} value={props.inputVarType} />
	 );
}

export default TextBox;
