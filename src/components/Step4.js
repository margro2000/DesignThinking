import React from "react";
import PageTitle from './PageTitle';
import {Button} from 'reactstrap';
import Team from './Team';
import DecisionButton from './DecisionButton';
import './Step3.css'

function Step4(props) {

	return (
		<div>
		<PageTitle title="Step 4: Select Top Ideas"/>

<div className='row1'>
		<input className="ideaBox2" type="text" placeholder="Browser Shutdown"/>
		<input className="ideaBox2" type="text" placeholder="Usage Sent to Parent"/>
		<input className="ideaBox" type="text" placeholder="Parental Controls"/>
</div>
<div className='row2'>
		<input className="ideaBox" type="text" placeholder="App with scheduled"/>
		<input className="ideaBox" type="text" placeholder="Only certain sites"/>
		<input className="ideaBox2" type="text" placeholder="Broaded educational scope"/>
		</div>
<p>Select your top 3 Best Ideas</p>
		<DecisionButton link="/Step5" buttonStyle= {{backgroundColor:'#66FF66', height: "50px"}} buttonContent = "Submit Ideas"/>

		<Team/>
		</div>
	 );
}

export default Step4;
