import React, { Component } from 'react';
import Sponsor from '../../components/Sponsor';
import { Link } from 'react-router-dom';

export default class Sponsors2021 extends Component {

  render() {
    return (
    <div>        
        <h1 className="text-center text-info font-weight-bold"> 
          Thank you to all the sponsors that supported us in our 2021 season!
        </h1>
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