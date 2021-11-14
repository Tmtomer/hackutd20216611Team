import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Graph from './graph.js'
  
class GraphCard extends React.Component{
    render(){
    return (
      <Card sx={{ width: "600px", height: "450px" }}>
        <CardContent>
          <Graph/>
        </CardContent>
      </Card>
    );

    }
}

export default GraphCard