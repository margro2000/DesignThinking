import React from "react";
import PageTitle from './PageTitle';
import {Button} from 'reactstrap';
import Team from './Team';
import NameLogo from './NameLogo';
import DecisionButton from './DecisionButton';
import './Step6.css'
import panda from '../images/panda_face.png';
import giraffe from '../images/giraffe_face.png';
import cat from '../images/cat_face.png';
import frog from '../images/frog_face.png';

function Step6(props) {

	return (
		<div>
		<PageTitle title="Step 6: Chose Your Favorite"/>
<p>Select the idea that you think best solved your customer's challenges.</p>

<div className="allIdeas">

<div className="col">
<Button className="IdeaBox">Browser Shut Down</Button>
<Button className="IdeaBox">Usage sent to parent</Button>
<Button className="IdeaBox">Broaded educational scope</Button>
</div>

<div className="col">
<Button className="IdeaBox">Shorter study hours</Button>
<Button className="IdeaBox2">Interactive Check-ins</Button>
<Button className="IdeaBox">Longer breaks</Button>
</div>

<div className="col">
<Button className="IdeaBox">Time splitting</Button>
<Button className="IdeaBox">Scheduled breaks</Button>
<Button className="IdeaBox">Question and answers</Button>
</div>

<div className="col">
<Button className="IdeaBox">Longer ideation</Button>
<Button className="IdeaBox">Interactice</Button>
<Button className="IdeaBox">Questions</Button>
</div>

</div>

<DecisionButton link="/Step7" buttonStyle= {{backgroundColor:'#66FF66', height: "50px"}} buttonContent = "Submit Selection"/>


		<Team/>

		</div>
	 );
}

export default Step6;
