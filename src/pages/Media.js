import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'reactstrap';
import $ from 'jquery';
import gallery from '../util/gallery-organization.json';

export default class Media extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: <div/>
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const imageHTML = Object.keys(gallery.comp).sort((a, b) => {return b-a}).map(g => {
            return  <>
                        <h4 className="text-light">{g}</h4>
                        <div className="year-section" key={`comp-${g}`}>
                            {[...Array(gallery.comp[g]).keys()].map(x => {
                                return <div key={`comp-${g}-${x}`} className="mb-3 pics animation">
                                            <img className="img-fluid" src={require(`../images/Gallery/comp/${g}/${x+1}.jpg`)} alt="" />
                                        </div>})}
                        </div>
                    </>
        });
        this.setState({images: imageHTML})
    }

    onClick(e) {
        const name = e.target.name
        this.setState({
            images: Object.keys(gallery[name]).sort((a, b) => {return b-a}).map(g => {
                return  <>
                            <h4 className="text-light">{g}</h4>
                            <div className="year-section" key={`comp-${g}`}>
                                {[...Array(gallery[name][g]).keys()].map(x => {
                                    return <div key={`${name}-${g}-${x}`} className="mb-3 pics animation">
                                                <img className="img-fluid" src={require(`../images/Gallery/${name}/${g}/${(x + 1)}.jpg`)} alt="" />
                                            </div>})}
                            </div>
                        </>
            })
        })
        $('.sponsor-tab').removeClass().addClass('nav-link non-active sponsor-tab')
        $('#' + name).removeClass('non-active').addClass('active')
    }

    render() {
        console.log(gallery.build)
        return (
            <div>
                <AppNavbar />
                <Container fluid className="col-lg-10 body-content">
                    <div className="big-font text-dark">
                        Media
                </div>
                    <br /><br />
                    <div className="card text-center mb-5">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <input id="comp" name="comp" type="button" className="nav-link active sponsor-tab" onClick={this.onClick} value="competition"/>
                                </li>
                                <li className="nav-item">
                                    <input id="build" name="build" type="button" className="nav-link non-active sponsor-tab" onClick={this.onClick} value="build season"/>
                                </li>
                                <li className="nav-item">
                                    <input id="fun" name="fun" type="button" className="nav-link non-active sponsor-tab" onClick={this.onClick} value="fun times"/>                        
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="gallery" id="gallery">
                                {this.state.images}
                            </div>
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }
}