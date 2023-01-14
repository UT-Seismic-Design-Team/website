import React, { Component } from 'react';
import { SponsorComponent } from '../../components/Sponsor';
import { Link } from "react-router-dom";

const data = {
  year: "2019",
  gold: [
    {
      name: "RJC",
      logo: "rjc.jpg",
      description:
        "Read Jones Christoffersen Ltd. (RJC) is one of the largest engineering firms in Canada specializing in structural engineering, structural restoration, building science and parking planning services. We are a large but specialized firm, with a national staff of over 450 people in offices across Canada. We've worked on many UofT projects, including the Faculty of Law expansion, the UTSC Environmental Science and Chemistry Building and the UTM North Building Reconstruction.",
      link: "http://rjc.ca/",
    },
  ],
  silver: [
    {
      name: "S-Frame",
      logo: "sframe.jpg",
      description:
        "Since its founding in 1981, S-FRAME Software is a leading innovator in the structural engineering software field, beginning with its first 2-D P-FRAME analysis program up to today: An integrated 9-product structural analysis and design product suite for steel, concrete, and timber structures.",
      link: "http://s-frame.com/",
    },
  ],
  bronze: [
    {
      name: "PICCO Engineering",
      logo: "PICCO.png",
      description:
        "SHAPING PROGRESS. DESIGNING LEGACY. PICCO Engineering is an award-winning professional services firm founded in 1992, with 3 distinct areas of expertise:STONE consulting, cladding and engineered anchor systems.RESIDENTIAL engineering for low/mid/high-rise structures.STRUCTURAL engineering that applies to a variety of building types and materials.We are proud to have developed numerous long-term relationships with our valued clients over the years, and understand the importance of collaboration, trust and respect in all our interactions. We believe there is an innovative solution to every engineering challenge as we strive to facilitate the vision of our clients",
      link: "https://picco-engineering.com/",
    },
    {
      name: "Associated Engineering",
      logo: "associated_engineering.jpg",
      description:
        "Associated Engineering is a firm committed to building communities that are vibrant, healthy, and efficient, support economic growth, and improve the environment. They are a uniquely Canadian, employee-owned company that brings global perspectives to their clients from their international experience and technical involvement.",
      link: "https://www.ae.ca/",
    },
  ],
};

export default class Sponsors2019 extends Component {

  render() {
    return (
      <div>
        <SponsorComponent data={data} />
        <p className="text-center">
          Interested in our team? Learn more <Link to="/contact"> here </Link>
        </p>
      </div>
    );
  }
}