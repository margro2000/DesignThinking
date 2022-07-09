import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import IdeateSession from './components/IdeateSession';
import CustomerDiscoverySession from './components/CustomerDiscoverySession';
import PrototypingSession from './components/PrototypingSession';
import TestingSession from './components/TestingSession';
import {Route, BrowserRouter, Redirect} from "react-router-dom";
import CreateSessionPage from './components/CreateSessionPage';
import JoinSessionPage from './components/JoinSessionPage';
import TeamFormation from './components/TeamFormation';
import ComingSoonPage from './components/ComingSoonPage';
import Sky from 'react-sky';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import Step7 from './components/Step7';


import img1 from "./images/whiteDotV1.jpg"
import img2 from "./images/whiteDotV2.jpg"
import img3 from "./images/whiteDotV3.png"

class App extends React.Component {

	render(){
  return (
    <div className="App">
	<Sky className="stars"
  images={{
	/* FORMAT AS FOLLOWS */
	0: img1,  /* You can pass as many images as you want */
	1: img2,
	2: img3
	/* 3: your other image... */
	/* 4: your other image... */
	/* 5: your other image... */
	/* ... */
  }}
  how={300} /* Pass the number of images Sky will render chosing randomly */
  time={60} /* time of animation */
  size={'15px'} /* size of the rendered images */
  background={'black'} /* color of background */
/>
	<BrowserRouter>
	<Route exact path="/DesignThinking">
    <Redirect to="/MainPage" />
	</Route>
	<Route exact path="/">
		<Redirect to="/MainPage" />
	</Route>
	<Route path="/MainPage" component={MainPage}/>
	<Route path="/CustomerDiscoverySession" component={CustomerDiscoverySession}/>
	<Route path="/IdeateSession" component={IdeateSession}/>
	<Route path="/PrototypingSession" component={PrototypingSession}/>
	<Route path="/TestingSession" component={TestingSession}/>
	<Route path="/CreateSessionPage" component={CreateSessionPage}/>
	<Route path="/JoinSessionPage" component={JoinSessionPage}/>
	<Route path="/TeamFormation" component={TeamFormation}/>
		<Route path="/ComingSoonPage" component={ComingSoonPage}/>
	<Route path="/Step1" component={Step1}/>
	<Route path="/Step2" component={Step2}/>
	<Route path="/Step3" component={Step3}/>
	<Route path="/Step4" component={Step4}/>
	<Route path="/Step5" component={Step5}/>
	<Route path="/Step6" component={Step6}/>
	<Route path="/Step7" component={Step7}/>
	</BrowserRouter>
    </div>
  );
}
}

export default App;
