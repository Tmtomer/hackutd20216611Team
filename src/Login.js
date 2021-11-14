import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@mui/icons-material/Lock';
import { TextField } from "@material-ui/core";
import './App.css';

function Login(){
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto", backgroundColor:"#b8afae"}
    const avatarStyle={backgroundColor:'blue'}
    return(
        <div style={{color:'#7a7777'}}>
            <Grid>
            <Paper elevation ={10} style ={paperStyle} >
                <Grid align = 'center'>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <Button type= 'submit' color='primary' variant="contained" fullWidthSign>Sign in</Button>
            </Paper>
        </Grid>
        
        </div>
    )
}

export default Login