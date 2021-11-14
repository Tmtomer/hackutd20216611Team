import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Graph from './graph.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme3 = createTheme({
  palette: {
    secondary: {
      main: '#bbbcb8'
    }
  }
});

class GraphCard extends React.Component{
    render(){
    return (
      <ThemeProvider theme={theme3}>
      <Card sx={{ width: "800px", height: "450px", borderRadius: 4, boxShadow: 6}}>
        <CardContent>
          <Graph/>
        </CardContent>
      </Card>
      </ThemeProvider>
    );

    }
}

export default GraphCard