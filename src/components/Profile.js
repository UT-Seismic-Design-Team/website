import React, { Component } from 'react';
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image.trim(),
      name: this.props.memberName,
      blurb: this.props.blurb,
      role: this.props.role
    };
  }

  render() {
    let linkedin = (this.props.linkedin != null) ?
        (<a href={this.props.linkedin}>
          <FaLinkedin style={{fontSize: '27px', color:'#0077B5'}}/>
        </a>) : (<span/>);

    let github = (this.props.github != null) ?
        (<a href={this.props.github}>
          <FaGithubSquare style={{fontSize: '27px', color:'#000000'}}/>
        </a>) : (<span/>);

    let instagram = (this.props.instagram != null) ?
        (<a href={this.props.instagram}>
          <FaInstagramSquare style={{fontSize: '27px', color:'#E4405F'}}/>
        </a>) : (<span/>);

    return (this.state.role === "Team Co-Captain") ? (
    <div className="col-md-6 mb-5">
        <div className="card profile">
            <h5 className="card-header">
              <b>{this.state.name}</b>
              <div style={{display: "flex", alignItems: "center"}}>
                {linkedin}{github}{instagram}
              </div>
            </h5>
            <img className="card-image-top" src={require('../images/Team/' + this.state.image)} alt={this.state.name}/>
            <div className="card-body">
              <h5 className="card-title"><u>{this.state.role}</u></h5>
              <h5 className="card-subtitle">{this.props.discipline}</h5>
              <p className="card-text">{this.state.blurb}</p>
            </div>
        </div>
    </div>) : (
    <div className="col-md-12 mb-5">
        <div className="card profile">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img" src={require('../images/Team/' + this.state.image)} alt={this.state.name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <b>{this.state.name}</b> 
                  <div style={{display: "flex", alignItems: "center"}}>
                    {linkedin}{github}{instagram}
                  </div>
                </h5>
                <h5 className="card-title"><u>{this.state.role}</u></h5>
                <h5 className="card-subtitle">{this.props.discipline}</h5>
                <br/>
                <p className="card-text">{this.state.blurb}</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}