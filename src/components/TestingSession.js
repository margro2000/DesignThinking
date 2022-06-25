import React from 'react';
import './TestingSession.scss'
import PageTitle from './PageTitle';
import DecisionButton from './DecisionButton';
import CreateSessionPage from './CreateSessionPage';
import Grid from '@mui/material/Grid';

function TestingSession(props) {

	return (
<div className = "TestingSession">
<Grid container spacing={2}>
<Grid item xs={12}>
	<PageTitle title="ByDesign"/>
	</Grid>
	<Grid item xs={12}>
	<DecisionButton link="/CreateSessionPage" buttonStyle= {{marginTop: "5%",backgroundColor:'#FD5B78', height: "300px"}} buttonContent = "Create a Testing Session"/>
	<DecisionButton link="/JoinSessionPage" buttonStyle= {{marginTop: "5%", backgroundColor:'#50BFE6', height: "300px"}} buttonContent = "Join a Testing Session"/>
</Grid>
</Grid>
</div>
);
}

export default TestingSession;
