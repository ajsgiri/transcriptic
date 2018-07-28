import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart.js';
import Grid from './components/grid.js';
import 'react-vis/dist/main.scss';

class Main extends React.Component {
  render() {
        var json = require('./qpcrGenData.json');
        return (
          <div>
            <Chart data={json}/>
            <Grid data={json}/>
          </div>
        );
  }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
