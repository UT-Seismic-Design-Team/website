import React, { Component } from 'react';

export default class RoleApp extends Component {
  render() {
    return <div className="col-md-3 mb-4">
              <div className="card des">
                <h5 className="card-header font-weight-bold"> {this.props.position} </h5>
                <img className="card-img" src={this.props.image} alt={this.props.position}/>
                <div className="card-body www-des">
                  <p>{this.props.text}</p>
                  <a className="btn btn-dark" href={this.props.link}>Apply Here</a>
                </div>
              </div>
            </div>;
  }
}