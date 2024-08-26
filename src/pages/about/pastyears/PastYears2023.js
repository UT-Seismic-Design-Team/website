import React, { Component } from "react";
import Description from "../../../components/Description";
import gallery from "../../../util/gallery-organization.json";
import "./pastYears.css";

const SPECKLE_MODEL_STREAM =
  "https://app.speckle.systems/projects/d536d8aa1f/models/060b67a877#embed=%7B%22isEnabled%22%3Atrue%7D";

export default class Sponsors2023 extends Component {
  render() {
    return (
      <div>
        <Description
          align="left"
          title="2023"
          description="The 2023 competition in Salt Lake City was a challenging yet rewarding experience. We have learned and explored different new design and construction techniques to transition from a wider to a narrower section in our tower. At the end, even though our tower could not be delivered to the competition due to unexpected shipping delays, we scored 100% in the Architecture category and won the Best Architecture Award which was a significant achievement."
        />
        <div className="viewer-center">
          <iframe
            src={SPECKLE_MODEL_STREAM}
            width="80%"
            height="600"
            frameborder="0"
            title="Tower 3D Model - 2023"
          ></iframe>
        </div>

        <div className="year-section">
          {[...Array(gallery["comp"]["2023"]).keys()].map((x) => {
            return (
              <div
                key={`${"comp"}-${"2023"}-${x}`}
                className="mb-3 pics animation"
              >
                <img
                  className="img-fluid"
                  src={require(`../../../images/Gallery/${"comp"}/${"2023"}/${
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
