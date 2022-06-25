import React from "react";
import PageTitle from './PageTitle';
import Character from './Character';
import Team from './Team';

function Step1(props) {
	return (
		<div>
		<PageTitle title="Step 1: Who is your customer?"/>
		<Character/>
		<Team/>
		</div>
	 );
}

export default Step1;
