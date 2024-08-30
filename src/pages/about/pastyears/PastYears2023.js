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
          description="Despite facing challenges during the second ground motion when our sky bridges disconnected, we are excited to share our achievements:
Highest Bonus for Damper Design: We proudly earned the top bonus for our innovative damper design.
4th Place in Architecture: Our architectural design impressed the judges, earning us a top-four spot.
4th Place in Poster Presentation: Our informative and visually appealing poster also secured 4th place.
6th Place in Communication: Our effective communication skills earned us 6th place in this category.
95% Score in Proposal Writing: Our detailed and compelling proposal received a 95% score."
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
