import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@mui/icons-material/Lock';

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    return(
        <Grid>
            <Paper elevation ={10} style ={paperStyle}>
                <Grid align = 'center'>
                <Avatar ><LockIcon/></Avatar>
                <h2>Sign in</h2>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login