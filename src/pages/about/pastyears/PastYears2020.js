import React, { Component } from 'react';
import Description from '../../../components/Description';
import PerformanceTable from '../../../components/PerformanceTable';

export default class Sponsors2020 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: {
        table2020:
          [
              {
                  name: "Communications Score",
                  score: '85.2%',
                  rank: '12th out of 46'
              },
              {
                  name: "Architecture Score",
                  score: '78%',
                  rank: '16th out of 46'
              },
              {
                  name: "Analysis Prediction (% Error)",
                  score: '32%',
                  rank: '3rd out of 46'
              },
              {
                  name: "Annual Seismic Cost",
                  score: '$78,414',
                  rank: '4th out of 46'
              },
              {
                  name: "Final Annual Building Income",
                  score: '$372,744',
                  rank: '6th out of 46'
              }
          ]
      }
    };
  }
  
  render() {
    return (
      <div>
        <iframe src="https://speckle.xyz/embed?stream=499884e71d&commit=d5156dae60" width="600" height="400" frameborder="0"></iframe>
        <Description align="left" title="2020" description="
                      We’re very excited to compete in San Diego this March and look forward to seeing how other 
                      teams have tackled the torsional irregularities this year!"/>

                  <div className="row m-4 mb-5">
                      <div className="col-lg www-des">
                          <PerformanceTable data={this.state.tables.table2020}/>
                      </div>
                  </div>
      </div>
      
    );
  }
}
