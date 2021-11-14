import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {  
        series: [{
          name: 'Current Allocation',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Future Allocation',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          
          colors: ['#bb3e03', '#94d2bd', '#9C27B0'],
          chart: {
            height: 350,
            type: 'area',
            toolbar: { show:false},
            fontFamily: 'Helvetica',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
          },
          dataLabels: {
            enabled: false,
            style: {
            }
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            title: {
                text: 'Date',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  'Helvetica',
                    color:  '#263238'
                  },
              },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          yaxis:{
            title: {
                text: 'Total Net Savings (USD)',
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  'Helvetica',
                    color:  '#263238'
                  },
              },
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy'
            },
          },
          
        },
      
      
      };
    }


  render() {
    return (
        <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    );
  }
}

export default Graph;