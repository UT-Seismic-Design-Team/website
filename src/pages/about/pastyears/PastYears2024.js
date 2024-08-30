import React, { Component } from "react";
import Description from "../../../components/Description";
import gallery from "../../../util/gallery-organization.json";
import "./pastYears.css";

const SPECKLE_MODEL_STREAM =
  "https://app.speckle.systems/projects/6c9ceaa76b/models/09fa2777c5#embed=%7B%22isEnabled%22%3Atrue%7D";

export default class Sponsors2024 extends Component {
  render() {
    return (
      <div>
        <Description
          align="left"
          title="2024"
          description="From April 9-12, our team participated in the 21st Annual EERI Seismic Design Competition in Seattle. We are thrilled to share our achievements from this exciting event:
Top Damper Design Bonus: For the second year in a row, we earned the top prize for our innovative damper design.
2nd Place in Seismic Performance Prediction: Our team's prediction accuracy was among the best, securing us the second spot in this category.
13th Overall: Out of 40 competing teams, we proudly ranked 13th overall."
        />
        <div className="viewer-center">
          <iframe
            src={SPECKLE_MODEL_STREAM}
            width="80%"
            height="600"
            frameborder="0"
            title="Tower 3D Model - 2024"
          ></iframe>
        </div>

        <div className="year-section">
          {[...Array(gallery["comp"]["2024"]).keys()].map((x) => {
            return (
              <div
                key={`${"comp"}-${"2024"}-${x}`}
                className="mb-3 pics animation"
              >
                <img
                  className="img-fluid"
                  src={require(`../../../images/Gallery/${"comp"}/${"2024"}/${
                    x + 1
                  }.jpg`)}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
