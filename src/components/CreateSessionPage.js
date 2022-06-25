import React from "react";
import PageTitle from './PageTitle';
import ReactDOM from 'react-dom';
import TextBox from './TextBox';

import DecisionButton from './DecisionButton';

function CreateSessionPage (props) {
	return (
		<div>
	<PageTitle title="Create an Ideation Session"/>
	<TextBox textPlaceholder = "Your name"/>
	<TextBox textPlaceholder = "Team name"/>
	<DecisionButton link = '/TeamFormation' buttonStyle= {{marginTop: "5%", backgroundColor:'#66FF66', minheight: "100px"}} buttonContent = "Start Ideation Session"/>
</div>
);
  }

export default CreateSessionPage;
