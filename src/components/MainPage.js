import React from 'react';
import './MainPage.scss'
import PageTitle from './PageTitle';
import AccountLogin from './AccountLogin';
import DecisionButton from './DecisionButton';
import CreateSessionPage from './CreateSessionPage';
import Grid from '@mui/material/Grid';

function MainPage(props) {

	return (
<div className = "MainPage">
<Grid container direction="row" justifyContent="center" >
	<PageTitle title="Design Thinking" />
	<AccountLogin/>
</Grid>
<p style={{marginTop:"8%", fontSize:"150%", fontFamily: "Helvetica"}}>The principles of <span style={{fontWeight: 'bold', color:'#ffa8e7'}}>stunning</span> and <span style={{fontWeight: 'bold', color:'#96fff9'}}>intuitive</span> product design and development made <span style={{textDecoration: "underline"}}>easy for everyone</span>. </p>
<p style={{fontSize:"250%", marginTop: "7%"}}><span style={{fontWeight: 'bold', color:'#ff00ffff'}}>Team Sessions</span>:  Make Something Amazing Together</p>
	<Grid container direction="row" item md={12} spacing={1} alignItems={'center'} justifyContent={'center'}>
	<DecisionButton link="/ComingSoonPage" buttonStyle= {{marginLeft: "20px", height: "150px", width: "250px", fontSize: "30px", color: "white", marginTop: "5%", backgroundColor:'#ff00ffff'}} buttonContent = "Customer Discovery Session"/>
	<DecisionButton link="/IdeateSession" buttonStyle= {{marginLeft: "20px", height: "150px", width: "250px", fontSize: "30px", color: "white", marginTop: "5%", backgroundColor:'#ff00ffff'}} buttonContent = "Ideation Session"/>
	<DecisionButton link="/ComingSoonPage" buttonStyle= {{marginLeft: "20px", height: "150px", width: "250px", fontSize: "30px",color: "white", marginTop: "5%", backgroundColor:'#ff00ffff'}} buttonContent = "Prototyping Session"/>
	<DecisionButton link="/ComingSoonPage" buttonStyle= {{marginLeft: "20px", height: "150px", width: "250px", color: "white",  fontSize: "30px",marginTop: "5%", backgroundColor:'#ff00ffff'}} buttonContent = "Testing Session"/>
</Grid>

<p style={{fontSize:"100%", marginLeft:"45%", position: 'absolute',  bottom:15, color:'#96fff9'}}>Questions? Learn more here.</p>

</div>
);
}

export default MainPage;
