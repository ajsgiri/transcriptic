import React from 'react';
import ReactDOM from 'react-dom';
import {XYPlot, XAxis, YAxis, LineSeries} from 'react-vis';

const getLines = (data) => {
  return Object.keys(data).map((id) => {
    var dataSet = data[id].map((plot) => {
      return {
        x: plot.cycle,
        y: plot.fluorescence
      };
    });

    return <LineSeries curve={'curveMonotoneX'}  strokeWidth={1} data={dataSet} />;
  });
};

class Chart extends React.Component{
  render(){
    var data = this.props.data;
    return <XYPlot
      yDomain={[0, 5500]}  // optional configuration for visual settings
      xDomain={[1, 42]}
      width={1400}
      height={600}>
      <XAxis title={"Cycles"}/>
      <YAxis title={"Fluorescence"}/>
      {getLines(data)}  // draw lines from data using a loop
    </XYPlot>;
  }
}
export default Chart;
