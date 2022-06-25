import React from "react";
import PageTitle from './PageTitle';
import {Button} from 'reactstrap';
import Team from './Team';
import DecisionButton from './DecisionButton';
import './Step3.css'

function Step3(props) {

	return (
		<div>
		<PageTitle title="Step 3: Brainstorm Your Ideas"/>
<div className='row1'>
		<input className="ideaBox" type="text" placeholder="Idea"/>
		<input className="ideaBox" type="text" placeholder="Idea"/>
		<input className="ideaBox" type="text" placeholder="Idea"/>
</div>
<div className='row2'>
		<input className="ideaBox" type="text" placeholder="Idea"/>
		<input className="ideaBox" type="text" placeholder="Idea"/>
		<input className="ideaBox" type="text" placeholder="Idea"/>
		</div>
		<p>Typeout as many ideas as you can as quickly as you can that can solve this challenge</p>

		<DecisionButton link="/Step4" buttonStyle= {{backgroundColor:'#66FF66', height: "50px"}} buttonContent = "Submit Ideas"/>

		<Team/>
		</div>
	 );
}

export default Step3;
