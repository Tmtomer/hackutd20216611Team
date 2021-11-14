import { fontSize } from '@mui/system';
import { data } from 'cheerio/lib/api/attributes';
import { PieChart } from 'react-minimal-pie-chart';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';

const pie_1_data = [
    { title: 'One', value: 10, color: '#ef3c2d' },
    { title: 'Two', value: 15, color: '#CB1B16' },
    { title: 'Three', value: 20, color: '#1368AA' },
    { title: 'Three', value: 20, color: '#4091C9' },
];

const pie_2_data = [
    { title: 'One', value: 10, color: '#1368aa' },
    { title: 'Two', value: 15, color: '#9dcee2' },
    { title: 'Three', value: 20, color: '#f29479' },
    { title: 'Four', value: 20, color: '#ef3c2d' },
];

const styles = muiBaseTheme => ({
    card: {
      maxWidth: 300,
      margin: "auto",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    media: {
      paddingTop: "56.25%"
    },
    content: {
      textAlign: "left",
      padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
      margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: -muiBaseTheme.spacing.unit
      }
    }
  });

var cardStyle = {
    height: '25vw'
}

function Dashboard() {
    return (
        <div className="wrap">
            <div className="chart">
            <h1 className="chartText">Current Allocation</h1>
            <PieChart
                data={pie_1_data}
                lineWidth={25}
                rounded={true}
                animate={true}
                label={({ x, y, dx, dy, dataEntry }) => (
                    <text
                      x={x}
                      y={y}
                      dx={dx}
                      dy={dy}
                      dominant-baseline="central"
                      text-anchor="middle"
                      style={{
                        fontSize: '5px',
                        font: 'Helvetica'
                      }}
                    >
                    {dataEntry.title + ': '} 
                    {Math.round(dataEntry.percentage) + '%'}
                    </text>
                )}
                labelStyle= {(index) => ({
                    fontSize: '5px',
                    fill: pie_1_data[index].color
                })}
                labelPosition={50}
                
            />
            </div>
            <div className="chart">
            <h1 className="chartText">Future Allocation</h1>
            <PieChart
                data={pie_2_data}
                lineWidth={25}
                rounded={true}
                animate={true}
                label={({ x, y, dx, dy, dataEntry }) => (
                    <text
                      x={x}
                      y={y}
                      dx={dx}
                      dy={dy}
                      dominant-baseline="central"
                      text-anchor="middle"
                      style={{
                        fontSize: '5px',
                      }}
                    >
                    {dataEntry.title + ': '} 
                    {Math.round(dataEntry.percentage) + '%'}
                    </text>
                )}
                labelStyle= {(index) => ({
                    fontSize: '5px',
                    fill: pie_2_data[index].color
                })}
                labelPosition={50}
            />
            </div>
        </div>
    );
}

function Dashboard1() {
    return (
        <div className= "Joe">
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Card style={cardStyle}>
                    <CardContent>
                        <div className="chart">
                        <h1 className="chartText">Current Allocation</h1>
                        <PieChart
                            data={pie_1_data}
                            lineWidth={25}
                            rounded={true}
                            animate={true}
                            label={({ x, y, dx, dy, dataEntry }) => (
                                <text
                                x={x}
                                y={y}
                                dx={dx}
                                dy={dy}
                                dominant-baseline="central"
                                text-anchor="middle"
                                style={{
                                    fontSize: '5px',
                                }}
                                >
                                {dataEntry.title + ': '} 
                                {Math.round(dataEntry.percentage) + '%'}
                                </text>
                            )}
                            labelStyle= {(index) => ({
                                fontSize: '5px',
                                    fill: pie_1_data[index].color
                            })}
                            labelPosition={50}
                        />
                        </div>
                    </CardContent>
                </Card>
                <Card style={cardStyle}>
                    <CardContent>
                        <div className="chart">
                        <h1 className="chartText">Future Allocation</h1>
                        <PieChart
                            data={pie_2_data}
                            lineWidth={25}
                            rounded={true}
                            animate={true}
                            label={({ x, y, dx, dy, dataEntry }) => (
                                <text
                                x={x}
                                y={y}
                                dx={dx}
                                dy={dy}
                                dominant-baseline="central"
                                text-anchor="middle"
                                style={{
                                    fontSize: '5px',
                                }}
                                >
                                {dataEntry.title + ': '} 
                                {Math.round(dataEntry.percentage) + '%'}
                                </text>
                            )}
                            labelStyle= {(index) => ({
                                fontSize: '5px',
                                    fill: pie_2_data[index].color
                            })}
                            labelPosition={50}
                        />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default Dashboard1