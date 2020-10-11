import React, { Component } from 'react';
import AppNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// import Event from '../components/Event';
import { Container } from 'reactstrap';
// import { Link } from 'react-router-dom';

export default class Academy extends Component {
  componentDidMount(){ window.scrollTo(0, 0) }
  
  render() {
    return (
        <div>
            <AppNavbar/> 
            <Container fluid className="col-lg-10 body-content">
                <div className="big-font text-dark">
                    Seismic Academy
                </div>
                <br/><br/>
                <p>
                    This summer, our team ran a series of online training tutorials for our incoming team members. We covered the basic principles of our design approach as well as topics in solid mechanics, math, and structural analysis from our undergrad courses. 
                    If you're interested in learning more about seismic engineering, you can check out the recordings on our YouTube channel
                    <a href="https://www.youtube.com/playlist?list=PLFbyYnTZSwbhK0YVgCntgpkyEZOp8l0tG"> in this playlist </a>
                    Download all presentation slides and resources below:
                </p>
                {/* <p>
                    U of T's Seismic Team is running a series of online training tutorials for our 
                    incoming team members. We'll be covering the basic principles behind our design 
                    approach as well as some topics from our undergrad engineering courses. If you're 
                    interested in learning more about our team or seismic engineering, we welcome you 
                    to sign up and join <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAASOZAA5UMlJNWTNHNlJIUUJEUlpETURSSERYSkI2Qi4u">here</a>.
                </p>
                <br/>
                <h3><b> Keep up with all our lessons! </b></h3>
                <br/>
                <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23039BE5&amp;ctz=America%2FToronto&amp;src=aHBoZnAyZzNoanVhNGtjcTZoYmtsbmk5YmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237CB342&amp;title" 
                        style={{borderWidth: 0}} 
                        width="800" 
                        height="600" 
                        frameborder="0" 
                        scrolling="no"
                        title="Seismic Academy Calendar"/> */}
                
                <br/><br/>

                <h3><b> Resources </b></h3>
                <div className="row">
                    <div className="col-md-4">
                        <a  href="https://1drv.ms/u/s!AjyNTkMUtTLjglMw6EYJxHbbAty2?e=axkvLm" target="blank"
                            className="btn btn-success">
                            All tutorial and presentation files
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a  href="https://www.youtube.com/channel/UCugrQkMvhnQnwLsrQ_8Cvxg" target="blank"
                            className="btn btn-success">
                            Youtube Channel with recordings
                        </a>
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    );
  }
}