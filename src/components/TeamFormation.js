import React from "react";
import PageTitle from './PageTitle';

import DecisionButton from './DecisionButton';
import Team from './Team';


function TeamFormation (props) {
	return (
		<div>
	<PageTitle title="Team Formation"/>
	<p style = {{color: "white"}} >THWG's Unique Code:</p>
	<DecisionButton buttonStyle= {{marginRight: '50%', marginLeft: '35%', backgroundColor:'#FF00CC', minheight: "500px", fontSize: "90px" }} buttonContent = "D26G88K"/>
	<Team/>
		<DecisionButton link='/Step1' buttonStyle= {{marginRight: '50%', marginLeft: '35%', backgroundColor:'#66FF66', fontSize: "20px" }} buttonContent = "Start"/>
</div>
);
  }

export default TeamFormation;
