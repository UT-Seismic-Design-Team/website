import React, { Component } from 'react';
import '../../App.css';
import AppNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container } from 'reactstrap';
import PastYears2016 from './pastyears/PastYears2016';
import PastYears2017 from './pastyears/PastYears2017';
import PastYears2018 from './pastyears/PastYears2018';
import PastYears2019 from './pastyears/PastYears2019';
import PastYears2020 from './pastyears/PastYears2020';
import PastYears2022 from './pastyears/PastYears2022';
import $ from 'jquery';

export default class newPastYears extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastYearCollection: <PastYears2022/>
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount(){ window.scrollTo(0, 0) }
  
  onClick(e){
    const year = e.target.id
    if(year === "2022"){
      this.setState({
        pastYearCollection: <PastYears2022/>
      })
    }
    else if(year === "2020"){
      this.setState({
        pastYearCollection: <PastYears2020/>
      })
    }
    else if(year === "2019"){
      this.setState({
        pastYearCollection: <PastYears2019/>
      })
    }else if(year === '2018'){
      this.setState({
        pastYearCollection: <PastYears2018/>
      })
    }else if(year === '2017'){
      this.setState({
        pastYearCollection: <PastYears2017/>
      })
    }else{
      this.setState({
        pastYearCollection: <PastYears2016/>
      })
    }
    $('.sponsor-tab').removeClass().addClass('nav-link non-active sponsor-tab')
    $('#' + year).removeClass('non-active').addClass('active')
  }
  
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid className="col-lg-10 body-content">
          <div className="big-font text-dark">
            Past Competitions
          </div>
          <br/><br/>
          <div className="row">
              <div className="card mb-5">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <button id="2022" className="nav-link active sponsor-tab" onClick={this.onClick}>2022</button>
                  </li>
                  <li className="nav-item">
                    <button id="2020" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2020</button>
                  </li>
                  <li className="nav-item">
                    <button id="2019" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2019</button>
                  </li>
                  <li className="nav-item">
                    <button id="2018" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2018</button>
                  </li>
                  <li className="nav-item">
                    <button id="2017" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2017</button>
                  </li>
                  <li className="nav-item">
                    <button id="2016" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2016</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {this.state.pastYearCollection}
              </div>
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}