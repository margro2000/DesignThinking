import React from "react";
import PageTitle from './PageTitle';
import {Button} from 'reactstrap';
import Team from './Team';
import './Step2.css'

import boy from '../images/cartoon_img_boy.png';

function Step2(props) {

	return (
		<div>
		<PageTitle title="Step 2: What Challenges Does Your Customer Face?"/>
		<img className="characterImg" src={boy} alt="alt"/>
		<p>hobbies: video-games, reading</p>
		<p>characteristics: shy, smart</p>
		<div className="typeChallenges">
		<p>List the challenges your customer faces</p>
		<input className="charText" type="text" placeholder="Challenge"/>
		<Button className= "challenge"> Submit </Button>
		<a href='/Step3'>
		<Button className= "ideate"> Ideate </Button>
		</a>
		</div>
		<Team/>
		</div>
	 );
}

export default Step2;
