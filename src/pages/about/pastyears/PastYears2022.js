import React, { Component } from 'react';
import Description from '../../../components/Description';
import gallery from "../../../util/gallery-organization.json";
import './pastYears.css'

const SPECKLE_MODEL_STREAM =
  "https://speckle.xyz/embed?stream=499884e71d&commit=e8dface33a&c=%5B22.58372%2C57.25625%2C78.99198%2C-26.65825%2C8.01428%2C29.75%2C0%2C1%5D&hidesidebar=true";

export default class Sponsors2022 extends Component {
    render() {
    return (
      <div>
        <Description
          align="left"
          title="2022"
          description="
            The 2022 competition in Salt Lake City was a challenging yet rewarding experience. We have learned and explored different new design and construction techniques to transition from a wider to a narrower section in our tower. At the end, even though our tower could not be delivered to the competition due to unexpected shipping delays, we scored 100% in the Architecture category and won the Best Architecture Award which was a significant achievement."
        />
        <div className="viewer-center">
          <iframe
            src={SPECKLE_MODEL_STREAM}
            width="80%"
            height="600"
            frameborder="0"
            title="Tower 3D Model - 2022"
          ></iframe>
        </div>

        <div className="year-section">
          {[...Array(gallery["comp"]["2022"]).keys()].map((x) => {
            return (
              <div
                key={`${"comp"}-${"2022"}-${x}`}
                className="mb-3 pics animation"
              >
                <img
                  className="img-fluid"
                  src={require(`../../../images/Gallery/${"comp"}/${"2022"}/${
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
