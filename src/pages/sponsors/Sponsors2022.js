import React, { Component } from 'react';
import { SponsorComponent } from '../../components/Sponsor'
import { Link } from 'react-router-dom';

const data = {
  year: "2022",
  gold: [
    {
      name: "CastConnex",
      logo: "CastConnex.png",
      description:
        "CAST CONNEX® is the industry leader in the architectural and structural use of cast steel components in the design and construction of building and bridge structures. Our products include pre-engineered connectors that simplify the design and enhance the performance of structures. We also offer design-build services for custom cast steel nodes and components.",
      link: "https://www.castconnex.com/",
    },
  ],
  silver: [
    {
      name: "Entuitive U",
      logo: "EntuitiveU.png",
      description:
        "Entuitive U provides students with a tangible experience in the life of a real engineer, through participation in several activities based on real Entuitive projects. It also gives students and recent graduates a meaningful connection to the industry by connecting them with subject matter experts.",
      link: "https://www.entuitiveu.com/",
    },
  ],
};

export default class Sponsors2022 extends Component {
  render() {
    return (
      <div >
        <SponsorComponent data={data} />
      </div>
    );
  }
}
