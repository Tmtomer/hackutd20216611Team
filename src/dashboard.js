import PieCharts from "./piechart.js";
import * as React from 'react';
import GraphCard from "./graphCard.js";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextCard from './TextCard.js'
function Dashboard() {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:"#004879"}}>
            <Toolbar> 
                <img src="appbar-logo.png" style={{ width:"150px", height:"75px", marginLeft:"auto", marginRight:"auto", marginTop:"-5vh", marginBottom:"-10vh"}} alt="logo"/>
            </Toolbar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
        <navBar/>
        <br></br>
        <div style={{marginLeft:"160px", marginTop:'20px'}}><PieCharts/></div>
        <br></br>
        <div style={{marginTop:"4px", marginLeft:"38px", marginBottom:"10px"}}><GraphCard/></div>
        <div style={{marginLeft:"900px", marginTop:"-460px"}}><TextCard/></div>
        </>
    );
}

export default Dashboard;