import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class TextCard extends React.Component{  
    render(){
        return (
            <div>
                <Card variant="outlined" sx={{width: "690px", height: "270px", borderRadius: 4, boxShadow: 6}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" fontSize="23pt">
                        Assessments
                        </Typography >
                        <Typography variant="body2" color="text.secondary" fontSize="17pt">
                        -Invest more in etfs and bonds due to underperformance
                        <br></br>
                        -Allocate 5% in investments rather than a savings account
                        <br></br>
                        -Deallocate individual securities like Intel because they are underperforming
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" fontSize="15px">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default TextCard