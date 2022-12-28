import React, { Component } from 'react';
import Description from '../../../components/Description';
import PerformanceTable from '../../../components/PerformanceTable';
import "./pastYears.css";

const SPECKLE_MODEL_STREAM =
  "https://speckle.xyz/embed?stream=6d14b7665a&commit=4c33359c5e";

export default class Sponsors2019 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: {
        table2019:
          [
              {
                  name: "Communications Score",
                  score: '89.7%',
                  rank: '1st out of 34'
              },
              {
                  name: "Architecture Score",
                  score: '50%',
                  rank: '26th out of 35'
              },
              {
                  name: "Analysis Prediction (% Error)",
                  score: '90.6',
                  rank: '11th out of 16'
              },
              {
                  name: "Annual Seismic Cost",
                  score: '$278,666',
                  rank: '12th out of 34'
              },
              {
                  name: "Final Annual Building Income",
                  score: '$57,584',
                  rank: '7th out of 34'
              }
          ]
      }
    };
  }
  
  render() {
    return (
      <div>
        <Description
          align="left"
          title="2019"
          description="
                        The most recent competition in Vancouver brought us surprises and new successes. Being the first team to
                        use dampers in our design, this year held many new learning opportunities. As well, due to the diligence
                        of our team we managed to earn 1st place in communication which was a great milestone.
                    "
        />
        <div className="viewer-center">
          <iframe
            src={SPECKLE_MODEL_STREAM}
            width="900"
            height="600"
            frameborder="0"
            title="Tower 3D Model - 2019"
          ></iframe>
        </div>
        <div className="row m-4 mb-5">
          <div className="col-lg www-des">
            <PerformanceTable data={this.state.tables.table2019} />
          </div>
        </div>
      </div>
    );
  }
}
