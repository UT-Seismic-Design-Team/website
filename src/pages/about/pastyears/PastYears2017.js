import React, { Component } from 'react';
import Description from '../../../components/Description';
import PerformanceTable from '../../../components/PerformanceTable';
import "./pastYears.css";

const SPECKLE_MODEL_STREAM =
  "https://speckle.xyz/embed?stream=6d14b7665a&commit=4c33359c5e";

export default class Sponsors2017 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: {
        table2017:
          [
              {
                  name: "Communications Score",
                  score: '84%',
                  rank: '7th out of 33'
              },
              {
                  name: "Architecture Score",
                  score: '81%',
                  rank: '10th out of 33'
              },
              {
                  name: "Analysis Prediction (% Error)",
                  score: '23.5%',
                  rank: '3rd out of 15'
              },
              {
                  name: "Annual Seismic Cost",
                  score: '$66,183',
                  rank: '3rd out of 33'
              },
              {
                  name: "Final Annual Building Income",
                  score: '$448,593',
                  rank: '8th out of 33'
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
          title="2017"
          description="
                    This year our team achieved a number of significant milestones in terms of construction and design based on our experience from the previous year.
                    Firstly, we were able to completely restructure our construction process by employing the use of a full height jig in order to maximize consistency throughout the structure."
        />
        <div className="viewer-center">
          <iframe
            src={SPECKLE_MODEL_STREAM}
            width="900"
            height="600"
            frameborder="0"
            title="Tower 3D Model - 2017"
          ></iframe>
        </div>
        <div className="row m-4">
          <div className="col-lg www-des">
            <p>
              {" "}
              With this faster and more efficient construction process, our team
              was able to construct a full scaled prototype to test at the
              University of Toronto. Special thanks goes out to Professor
              Christopoulos and Professor Kwon for graciously allowing the team
              to use the shaketable and to Dr. Reza Hessabi for teaching our
              team on how to operate the shaketable.
            </p>
            <p>
              The results from these shaketable tests were essential for
              calibrating our analysis model as well as for deriving the
              fundamental modal properties of our design. Once our analysis
              model had been properly calibrated, we were able to optimize the
              design of the structure through seeking the most cost-effective
              cross-sectional width of our tubular design that can still allow
              for architectural flexibility.
            </p>
            <p>
              This parametric study was conducted using a script written in
              Excel VBA alongside the SAP2000 oAPI plugin. The results of our
              analysis and collaboration with architectural students accumulated
              to the design of the Aqua tower.
            </p>
          </div>
        </div>

        <div className="row m-4">
          <div className="col-lg www-des">
            <p>
              {" "}
              A total of six engineering undergraduate students travelled to the
              Portland, OR to compete in the 13th Annual EERI Seismic Design
              Competition.
            </p>
            <p>
              It was a pleasure competing alongside some of the top engineering
              schools from around the world while meeting new and old fellow
              engineering peers who share the same passion and enthusiasm for
              seismic engineering as us. Here was our performance this year:
            </p>
            <PerformanceTable data={this.state.tables.table2017} />
          </div>
        </div>
      </div>
    );
  }
}
