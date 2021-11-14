import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@mui/icons-material/Lock';
import { TextField } from "@material-ui/core";
import Button from '@mui/material/Button';
import './App.css';

function Login(){
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto", backgroundColor:"#ffffff"}
    const avatarStyle={backgroundColor:'blue'}
    return(
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/main.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: '1920px',height:"103vh", marginTop:"-3vh" }}>
        
        <Grid>
            <div style={{paddingTop:"0vh"}}>
            <Paper elevation ={10} style ={paperStyle} >
                <Grid align = 'center'>
                <img className="button-style" src="http://localhost:3000/Logo.png" style={{width:"300px", height:"140px"}}></img>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <Button type= 'submit' color='primary' variant="contained" fullWidth>Sign in</Button>
            </Paper>
            </div>
        </Grid>
        
        </div>
    )
}

export default Login