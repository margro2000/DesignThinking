import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.scss'

function PageTitle(props) {
	return (
		<h1 className="PageTitle">{props.title}</h1>
	);
}

export default PageTitle;
