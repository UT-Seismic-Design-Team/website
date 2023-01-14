import React, { Component } from 'react';
import { SponsorComponent } from '../../components/Sponsor';
import { Link } from "react-router-dom";

const data = {
  year: "2020",
  gold: [
    {
      name: "Entuitive",
      logo: "Entuitive.png",
      description:
        "Entuitive is a consulting engineering practice with a vision 'to design advanced structures and systems that support a sustainable future.",
      link: "http://www.entuitive.com/",
    },
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
      name: "Cast Connex",
      logo: "CastConnex.png",
      description:
        "CAST CONNEX® is the industry leader in the architectural and structural use of cast steel components in the design and construction of building and bridge structures. Our products include pre-engineered connectors that simplify the design and enhance the performance of structures. We also offer design-build services for custom cast steel nodes and components.",
      link: "http://www.castconnex.com/",
    },
    {
      name: "S-Frame",
      logo: "sframe.jpg",
      description:
        "Since its founding in 1981, S-FRAME Software is a leading innovator in the structural engineering software field, beginning with its first 2-D P-FRAME analysis program up to today: An integrated 9-product structural analysis and design product suite for steel, concrete, and timber structures.",
      link: "http://s-frame.com/",
    },
    {
      name: "Walter P Moore",
      logo: "WPM.jpg",
      description:
        "We are an international company of engineers, architects, innovators, and creative people who solve some of the world’s most complex structural and infrastructure challenges. Providing structural, diagnostics, civil, traffic, parking, transportation, enclosure, and construction engineering services, we design solutions that are cost- and resource-efficient, forward-thinking, and help support and shape communities worldwide. Founded in 1931 and headquartered in Houston, Texas, our 600+ professionals work across 18 U.S. offices and five international locations.",
      link: "https://www.walterpmoore.com/challenge-us",
    },
  ],
  bronze: [
    {
      name: "Blackwell",
      logo: "Blackwell.png",
      description:
        "Blackwell offers full consulting engineering services on a broad spectrum of projects, from the new construction of university facilities, offices, retail buildings, medical centres, recreational and visitor centres, schools, libraries and religious institutions, custom homes for private owners, multi-residential and industrial buildings, as well as additions and alterations to existing structures, including those with designated heritage status.Blackwell offers full consulting engineering services on a broad spectrum of projects, from the new construction of university facilities, offices, retail buildings, medical centres, recreational and visitor centres, schools, libraries and religious institutions, custom homes for private owners, multi-residential and industrial buildings, as well as additions and alterations to existing structures, including those with designated heritage status.",
      link: "http://blackwell.ca/",
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


export default class Sponsors2018 extends Component {

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