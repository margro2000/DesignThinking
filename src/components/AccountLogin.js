import React, { Component }  from 'react';
import DecisionButton from './DecisionButton';
import Grid from '@mui/material/Grid';
import EmptyUserImg from "../images/emptyUserImg.png"

function AccountLogin(props) {

	return (
<div className = "AccountLogin">
<Grid container direction="column" item md={12} spacing={1} alignItems={'center'} justify={'center' }>
<img src={EmptyUserImg} alt="" style={{height: "100px", width: "100px" }} />
<DecisionButton link="/Login" buttonStyle= {{height: "25px", width: "200px", fontSize: "20px", color: "white",   marginTop: "5%", backgroundColor:'transparent'}} buttonContent = "Login"/>
<DecisionButton link="/Login" buttonStyle= {{height: "25px", width: "200px", fontSize: "15px", color: "#96fff9", backgroundColor:'transparent'}} buttonContent = "No Account? Create One!"/>
</Grid>
</div>
);
}

export default AccountLogin;
