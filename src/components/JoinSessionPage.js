import React from "react";
import PageTitle from './PageTitle';
import ReactDOM from 'react-dom';
import TextBox from './TextBox';

import DecisionButton from './DecisionButton';

function JoinSessionPage (props) {
	return (
		<div>
	<PageTitle title="Join an Ideation Session"/>
	<TextBox textPlaceholder = "Your name"/>
	<TextBox textPlaceholder = "Session ID"/>
	<DecisionButton buttonStyle= {{backgroundColor:'#66FF66', minheight: "100px"}} buttonContent = "Join Session"/>
</div>
);
  }

export default JoinSessionPage;
