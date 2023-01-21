import React, { Component } from 'react';
import {SponsorComponent} from '../../components/Sponsor';
import { Link } from 'react-router-dom';

const data = {
  year: "2021",
  gold: [
    {
      name: "Associated Engineering",
      logo: "associated_engineering.jpg",
      description:
        "Associated Engineering is a firm committed to building communities that are vibrant, healthy, and efficient, support economic growth, and improve the environment. They are a uniquely Canadian, employee-owned company that brings global perspectives to their clients from their international experience and technical involvement.",
      link: "https://www.ae.ca/",
    },
  ]
};


export default class Sponsors2021 extends Component {

  render() {
    return (
      <div>
        <SponsorComponent data={data} />
      </div>
    );
  }
}