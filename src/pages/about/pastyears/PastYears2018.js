import React, { Component } from 'react';
import Description from '../../../components/Description';
import PerformanceTable from '../../../components/PerformanceTable';
import "./pastYears.css";

const SPECKLE_MODEL_STREAM =
  "https://speckle.xyz/embed?stream=499884e71d&commit=7032b75c2b&hidesidebar=true";

export default class Sponsors2018 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: {
        table2018:
          [
              {
                  name: "Communications Score",
                  score: 'None',
                  rank: '13th out of 38'
              },
              {
                  name: "Architecture Score",
                  score: 'None',
                  rank: '14th out of 39'
              },
              {
                  name: "Analysis Prediction (% Error)",
                  score: 'None',
                  rank: '7th out of 7'
              },
              {
                  name: "Annual Seismic Cost",
                  score: '$58,516',
                  rank: '10th out of 38'
              },
              {
                  name: "Final Annual Building Income",
                  score: '$42,711',
                  rank: '15th out of 38'
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
          title="2018"
          description="
                    This year provided significant challenges to the team as it was comprised solely of newer members in only 
                    their first or second year on the team. As such much of the knowledge had to be transferred and only with 
                    the guidance and help of previous team members and the UofT EERI Student Chapter was the team able to place
                     well. "
        />
        <div className="viewer-center">
          <iframe
            src={SPECKLE_MODEL_STREAM}
            title="2018"
            width="900"
            height="600"
            frameborder="0"
          ></iframe>
        </div>
        <div className="row m-4">
          <div className="col-lg www-des">
            <p>
              The 2018 challenge involved a smaller footprint and thinner member
              sizes, significantly increasing the difficulty. To combat this,
              the team used a similar parametric study to the 2017 tower and
              determined the optimal solution was to increase the size of the
              columns and use a built-up section to achieve a similar stiffness
              as previous years.{" "}
            </p>

            <p>
              Overall, the team was able to place well, placing in the top 10
              for analysis and seismic cost and in the top 40% overall.
            </p>
          </div>
        </div>

        <div className="row m-4 mb-5">
          <div className="col-lg www-des">
            <PerformanceTable data={this.state.tables.table2018} />
          </div>
        </div>
      </div>
    );
  }
}
