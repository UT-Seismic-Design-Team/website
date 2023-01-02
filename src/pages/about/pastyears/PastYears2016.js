import React, { Component } from 'react';
import Description from '../../../components/Description';
import PerformanceTable from '../../../components/PerformanceTable';
import './pastYears.css'

const SPECKLE_MODEL_STREAM =
  "https://speckle.xyz/embed?stream=499884e71d&commit=d5156dae60";

export default class Sponsors2016 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: {
        table2016:
          [
              {
                  name: "Communications Score",
                  score: '81%',
                  rank: '4th out of 33'
              },
              {
                  name: "Architecture Score",
                  score: '58%',
                  rank: '30th out of 33'
              },
              {
                  name: "Analysis Prediction (% Error)",
                  score: '100%',
                  rank: '18th out of 18'
              },
              {
                  name: "Annual Seismic Cost",
                  score: '$259,603',
                  rank: '7th out of 32'
              },
              {
                  name: "Final Annual Building Income",
                  score: '$262,377',
                  rank: '4th out of 33'
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
          title="2016"
          description="
            In our inaugural year competing in the EERI Seismic Design Competition, we learned a great deal about constructing and designing a balsa wood structure to withstand ground motions of varying intensities.
            Our design this year consisted of an integrated structural and architectural systems in order to blend into the architectural scene of San Francisco."
        />
        {/* <div className="viewer-center">
          <iframe
            src={SPECKLE_MODEL_STREAM}
            width="900"
            height="600"
            frameborder="0"
            title="Tower 3D Model - 2016"
          ></iframe>
        </div> */}

        <div className="row m-4">
          <div className="col-lg www-des">
            <p>
              {" "}
              A total of seven undergraduate engineering students travelled to
              San Francisco, CA to compete in the 12th Annual EERI Seismic
              Design Competition alongside top engineering schools from all over
              the world. A huge thank you goes out to UBC alumni as well as the
              graduate students from the University of Toronto for giving us a
              head start in understanding the competition and structural design!
            </p>
            <p>See below for a summary of our team’s performance:</p>

            <PerformanceTable data={this.state.tables.table2016} />
          </div>
        </div>
      </div>
    );
  }
}
