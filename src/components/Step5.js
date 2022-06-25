import React from "react";
import PageTitle from './PageTitle';
import {Button} from 'reactstrap';
import Team from './Team';
import DecisionButton from './DecisionButton';
import './Step5.css'

function Step5(props) {

	return (
		<div>
		<PageTitle title="Step 5: Detail Top Ideas"/>

<div className='row1'>
		<div>
			<p>Browser Shut Down</p>
				<input className="detailBox" type="text" placeholder="Description"/>
		</div>
		<div>
			<p>Usage sent to parent</p>
				<input className="detailBox" type="text" placeholder="Description"/>
		</div>
		<div>
			<p>Broaded educational scope</p>
				<input className="detailBox" type="text" placeholder="Descriptions"/>
		</div>
</div>

<p>Write more details for each idea. What would the product look like? What are its most important features?</p>
		<DecisionButton link="/Step6" buttonStyle= {{backgroundColor:'#66FF66', height: "50px"}} buttonContent = "Submit Descriptions"/>

		<Team/>
		</div>
	 );
}

export default Step5;
