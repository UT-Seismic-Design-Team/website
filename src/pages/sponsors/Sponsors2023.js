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
      logo: "RJC_2023.jpg",
      description:
        "Read Jones Christoffersen Ltd. (RJC) is one of the largest engineering firms in Canada specializing in structural engineering, structural restoration, building science and parking planning services. We are a large but specialized firm, with a national staff of over 450 people in offices across Canada. We've worked on many UofT projects, including the Faculty of Law expansion, the UTSC Environmental Science and Chemistry Building and the UTM North Building Reconstruction.",
      link: "https://www.rjc.ca/",
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
