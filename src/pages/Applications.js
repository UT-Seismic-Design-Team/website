import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'reactstrap';
// import RoleApp from '../components/RoleApp';

class Home extends Component {
    componentDidMount(){ window.scrollTo(0, 0) }

    render() {
        return (
        <div>
            <AppNavbar/>
            <div id="dna"></div>

            <Container fluid className="col-lg-10 body-content">
                <div className="big-font text-dark">
                    Team Executive Member Applications
                </div>
                <br/><br/><br/>

                <p>
                    The application period to join the 2021 team has ended. Join our mailing list (below)
                    to stay informed about events for general members during the upcoming year.
                </p>

                <br/>

                {/* <div className="row">
                    <RoleApp position="Sponsorship" link="https://forms.gle/NpBtQRvsyuWj2rLF6" image="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"/>
                    <RoleApp position="Architecture" link="https://forms.gle/ptizjR9Ckks9LHNt8" image="https://images.unsplash.com/photo-1489058535093-8f530d789c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
                </div> */}

            </Container>
            <Footer/>
        </div>
        );
    }
}

export default Home;