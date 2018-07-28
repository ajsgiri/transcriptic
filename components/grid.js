import React from 'react';
import ReactDOM from 'react-dom';

/*
const getLines = (data) => {
  return Object.keys(data).map((id) => {
    console.log(id);
    var dataSet = data[id].map((plot) => {
      return {
        x: plot.cycle,
        y: plot.fluorescence
      };
    });

    return <LineSeries curve={'curveMonotoneX'}  strokeWidth={1} data={dataSet} />;
  });
};


*/
const numRows = 16;
const numCols = 24;

const drawDiv = (data) => {
  return Object.keys(data).map((id) => {
    return <div>{data[id]}</div>
  })
};

class Grid extends React.Component{
  render(){
    var data = this.props.data;
    var rows = [];
    for(var i=0; i<numRows; i++) {
      var cols = [];
      rows.push(cols);
      for(var j=0; j<numCols; j++) {
        var string = "row:" + i + "||column:" + j;
        cols.push(string);
      }
    }
    var grid = rows.map(function(cols) {
      return cols.map(function(string) {
        return <div>{string}</div>
      })
    })
    return <div>{grid}</div>
  }
}
export default Grid;
