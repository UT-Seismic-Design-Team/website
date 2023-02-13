import React, { Component } from "react";
import { SponsorComponent } from "../../components/Sponsor";
import { Link } from "react-router-dom";

const data = {
  year: "2023",
  diamond: [
    {
      name: "WSP",
      logo: "wsp_2023.png",
      description:
        "WSP is one of the world's leading engineering consulting firms. They provide technical and strategic advisory services in diverse engineering and infrastructure sectors.",
      link: "https://www.wsp.com/",
    },
  ],
  gold: [
    {
      name: "RJC Engineers",
      logo: "RJC_2023_v2.png",
      description:
        "Read Jones Christoffersen Ltd. (RJC) is one of the largest engineering firms in Canada specializing in structural engineering, structural restoration, building science and parking planning services. We are a large but specialized firm, with a national staff of over 450 people in offices across Canada. We've worked on many UofT projects, including the Faculty of Law expansion, the UTSC Environmental Science and Chemistry Building and the UTM North Building Reconstruction.",
      link: "https://www.rjc.ca/",
    },
  ],
  bronze: [
    {
      name: "PICCO Engineers",
      logo: "PICCO_2023.png",
      description:
        "SHAPING PROGRESS. DESIGNING LEGACY. PICCO Engineering is an award-winning professional services firm founded in 1992, with 3 distinct areas of expertise:STONE consulting, cladding and engineered anchor systems.RESIDENTIAL engineering for low/mid/high-rise structures.STRUCTURAL engineering that applies to a variety of building types and materials.We are proud to have developed numerous long-term relationships with our valued clients over the years, and understand the importance of collaboration, trust and respect in all our interactions. We believe there is an innovative solution to every engineering challenge as we strive to facilitate the vision of our clients",
      link: "https://picco-engineering.com/",
    },
    {
      name: "LEA Consulting Ltd",
      logo: "LEA.png",
      description:
        "Canada-based LEA Consulting Ltd. (LEA Canada) has been in operation since 1953. Specializing in infrastructure engineering, planning, and contract administration, LEA Canada has built a reputation across the country for delivering innovative solutions in project management, transportation planning, intelligent transportation systems (ITS), infrastructure security, contract administration, highway and municipal services, and bridge and building design.",
      link: "https://www.lea.ca/",
    },
  ],
};

export default class Sponsors2023 extends Component {
  render() {
    return (
      <div>
        <SponsorComponent data={data} />
      </div>
    );
  }
}
