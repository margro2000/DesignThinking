import React from "react";

import NameLogo from './NameLogo';
import DecisionButton from './DecisionButton';
import './Team.css'
import panda from '../images/panda_face.png';
import giraffe from '../images/giraffe_face.png';
import cat from '../images/cat_face.png';
import frog from '../images/frog_face.png';


function TeamFormation (props) {
	return (
		<div className="Team">
	<NameLogo content="Margarita (you)" img={giraffe}/>
		<NameLogo content="Barbara" img={panda}/>
		<NameLogo content="James" img={cat}/>
		<NameLogo content="Lexy" img={frog}/>

</div>
);
  }

export default TeamFormation;
