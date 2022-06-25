import React from 'react';
import './PrototypingSession.scss'
import PageTitle from './PageTitle';
import DecisionButton from './DecisionButton';
import CreateSessionPage from './CreateSessionPage';
import Grid from '@mui/material/Grid';

function PrototypingSession(props) {

	return (
<div className = "PrototypingSession">
<Grid container spacing={2}>
<Grid item xs={12}>
	<PageTitle title="ByDesign"/>
	</Grid>
	<Grid item xs={12}>
	<DecisionButton link="/CreateSessionPage" buttonStyle= {{marginTop: "5%",backgroundColor:'#FD5B78', height: "300px"}} buttonContent = "Create an Prototyping Session"/>
	<DecisionButton link="/JoinSessionPage" buttonStyle= {{marginTop: "5%", backgroundColor:'#50BFE6', height: "300px"}} buttonContent = "Join an Prototyping Session"/>
</Grid>
</Grid>
</div>
);
}

export default PrototypingSession;
