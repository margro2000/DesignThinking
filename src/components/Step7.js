import React from "react";
import PageTitle from './PageTitle';
import {Button} from 'reactstrap';
import Team from './Team';
import DecisionButton from './DecisionButton';
import Canvas from './Canvas'
import './Step7.css'


function Step7(props) {

	return (
		<div>
		<PageTitle title="Step 7: Your Final Idea"/>
		<h1 className="finalIdea">Interactive Check-ins</h1>
		<DecisionButton link="/MainPage" buttonStyle= {{backgroundColor:'#66FF66', height: "50px"}} buttonContent = "Done!"/>

		<Team/>
		</div>
	 );
}

export default Step7;
