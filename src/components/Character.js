import React from "react";
import {ButtonGroup} from 'reactstrap';
import {Button} from 'reactstrap';
import './Character.css';
import Team from './Team';

function Character(props) {
	return (
		<div className="survey">
		<p>Chose Your Customer's Gender</p>
		<ButtonGroup aria-label="Basic example">
		  <Button variant="secondary">Female</Button>
		  <Button variant="secondary">Male</Button>
		  <Button variant="secondary">Other/Non-binary</Button>
		</ButtonGroup>
		<p>Chose Your Customer's Age Range</p>
		<ButtonGroup aria-label="Basic example">
		  <Button variant="secondary">0-10</Button>
		  <Button variant="secondary">10-20</Button>
		  <Button variant="secondary">20-30</Button>
		  <Button variant="secondary">30+</Button>
		</ButtonGroup>
		<p>Chose Your Customer's Lifestyle</p>
		<ButtonGroup aria-label="Basic example">
		  <Button variant="secondary">In School</Button>
		  <Button variant="secondary">Full-time Job</Button>
		  <Button variant="secondary">Retired</Button>
		  <Button variant="secondary">Other</Button>
		</ButtonGroup>
		<p>List what might be your customer's typical hobbies</p>
		<input className="charText" type="text" placeholder="List hobbies"/>
		<p>List some of your typical's customer's important characteristics</p>
		<input className="charText" type="text" placeholder="Characteristics"/>
		<div className="submit">
		<a href='/Step2'>
		<Button className= "submitButton"> Submit </Button>
		</a>
		</div>
		</div>
	 );
}

export default Character;
