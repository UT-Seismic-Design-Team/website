import React, { Component } from 'react';
import Sponsor from '../../components/Sponsor';
import { Link } from 'react-router-dom';

export default class Sponsors2020 extends Component {

  render() {
    return (
    <div>        
        <h1 className="text-center text-info font-weight-bold"> 
          Thank you to all the sponsors that supported us in our 2020 season!
        </h1>
        <Sponsor    image="CastConnex.png"
                    sponsor="CastConnex"
                    des="CAST CONNEX® is the industry leader in the architectural and structural use of cast steel components in the design and construction of building and bridge structures. Our products include pre-engineered connectors that simplify the design and enhance the performance of structures. We also offer design-build services for custom cast steel nodes and components."
                    link="https://www.castconnex.com/"/>
        <Sponsor    image="rjc.jpg" 
                    sponsor="RJC" 
                    des="Read Jones Christoffersen Ltd. (RJC) is one of the largest engineering firms in Canada specializing in structural engineering, structural restoration, building science and parking planning services. We are a large but specialized firm, with a national staff of over 450 people in offices across Canada. We've worked on many UofT projects, including the Faculty of Law expansion, the UTSC Environmental Science and Chemistry Building and the UTM North Building Reconstruction."
                    link="http://rjc.ca/"/>
        <Sponsor    image="sframe.jpg" 
                    sponsor="S-Frame" 
                    des="Since its founding in 1981, S-FRAME Software is a leading innovator in the structural engineering software field, beginning with its first 2-D P-FRAME analysis program up to today: An integrated 9-product structural analysis and design product suite for steel, concrete, and timber structures." 
                    link="http://s-frame.com/"/>
        <Sponsor    image="stantec.png" 
                    sponsor="Stantec" 
                    des="Stantec is a modern engineering firm that focuses on designing for communities across the globe. They believe that communities provide a sense of place and belonging."
                    link="https://www.stantec.com/en/about/company-overview"/>
        <Sponsor    image="altair.png"
                    sponsor="Altair"
                    des="Altair is a leading provider of enterprise-class engineering software enabling innovation, reduced development times, and lower costs through the entire product lifecycle 
                    from concept design to in-service operation. Our simulation-driven approach to innovation is powered by our integrated suite of software which optimizes design performance across
                    multiple disciplines encompassing structures, motion, fluids, thermal management, electromagnetics, system modeling and embedded systems, while also providing data analytics and 
                    true-to-life visualization and rendering."
                    link="https://www.altair.com/about/"/>
        <Sponsor    image="ibi.jpg"
                    sponsor="IBI"
                    des="From high-rises to industrial buildings, schools to state-of-the-art hospitals, transit stations to highways, airports to toll systems, bike lanes to parks, we design every aspect of truly integrated cities.
                    Our collaborative approach focuses on future-forward solutions. We’re bridging the gap between design and technology, unlocking new potential in data-driven environments.
                    We believe in cities built upon intelligent systems, sustainable buildings, efficient infrastructure, and the human touch."
                    link="https://www.ibigroup.com/about-ibi-group/"/>
        <Sponsor    image="associated_engineering.jpg" 
                    sponsor="Associated Engineering" 
                    des="Associated Engineering is a firm committed to building communities that are vibrant, healthy, and efficient, support economic growth, and improve the environment. They are a uniquely Canadian, employee-owned company that brings global perspectives to their clients from their international experience and technical involvement." 
                    link="https://www.ae.ca/"/>
        <p className="text-center">
          Interested in our team? Learn more <Link to="/contact"> here </Link>
        </p>
    </div>);
  }
}