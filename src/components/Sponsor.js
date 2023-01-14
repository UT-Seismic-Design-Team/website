import React, { Component, useEffect, useRef } from 'react';
import { Tooltip } from  'bootstrap';
import "./Sponsor.css"

const SponsorCard = ({ sponsor, year, sponsorLevel }) => {
  const tooltipRef = useRef();

  useEffect(() => {
    var tooltip = new Tooltip(tooltipRef.current, {
      title: sponsor.name,
      placement: "bottom",
      trigger: "hover",
    });
  });
  return (
    <div>
        <button
          className="sponsorImageButton"
          data-toggle="modal"
          data-target={`#myModal${sponsor.name.replace(/ /g, "")}`}
        >
          <img
            ref={tooltipRef}
            className={`${sponsorLevel}SponsorImage sponsorImage`}
            src={require(`../images/Sponsors/${sponsor.logo}`)}
            alt={sponsor.name}
          />
        </button>
      <div
        className="modal fade"
        id={`myModal${sponsor.name.replace(/ /g, "")}`}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{sponsor.name}</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>{sponsor.description}</p>
            </div>
            <p>
              <a
                className="btn btn-info"
                target="_blank"
                rel="noopener noreferrer"
                href={sponsor.link}
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}


export const SponsorComponent = ({ data }) => {
  return (
    <div className="w-100">
      {data?.diamond && data.diamond.length && (
        <div className="partners diamondSponsors">
          <div>
            <h3>Diamond Sponsors</h3>
            <div className="sponsorsList">
              {data.diamond.map((sponsor, i) => {
                return (
                  <SponsorCard
                    key={i}
                    sponsor={sponsor}
                    year={data.year}
                    sponsorLevel="diamond"
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {data?.gold && data.gold.length && (
        <div className="partners goldSponsors">
          <div>
            <h3>Gold Sponsors</h3>
            <div className="sponsorsList">
              {data.gold.map((sponsor, i) => {
                return (
                  <SponsorCard
                    key={i}
                    sponsor={sponsor}
                    year={data.year}
                    sponsorLevel="gold"
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {data?.silver && data.silver.length && (
        <div className="partners silverSponsors">
          <div>
            <h3>Silver Sponsors</h3>
            <div className="sponsorsList">
              {data.silver.map((sponsor, i) => {
                return (
                  <SponsorCard
                    key={i}
                    sponsor={sponsor}
                    year={data.year}
                    sponsorLevel="silver"
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {data?.bronze && data.bronze.length && (
        <div className="partners bronzeSponsors">
          <div>
            <h3>Bronze Sponsors</h3>
            <div className="sponsorsList">
              {data.bronze.map((sponsor, i) => {
                return (
                  <SponsorCard
                    key={i}
                    sponsor={sponsor}
                    year={data.year}
                    sponsorLevel="bronze"
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {data?.partner && data.partner.length && (
        <div className="partners partnerSponsors">
          <div>
            <h3>Corporate Partners</h3>
            <div className="sponsorsList">
              {data.partner.map((sponsor, i) => {
                return (
                  <SponsorCard
                    key={i}
                    sponsor={sponsor}
                    year={data.year}
                    sponsorLevel="partner"
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default class Sponsor extends Component {

  render() {
    let imgSrc = this.props.image !== "" ? require('../images/Sponsors/' + this.props.image) : "";
    return <div className="row m-5">
    <div className="card mb-3 profile border-0">
        <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img" src={imgSrc} alt={this.props.sponsor}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                  <h5 className="card-title"><b>{this.props.sponsor}</b></h5>
                  <p className="card-text">{this.props.des}</p>
                  <p className="card-text"><a className="btn btn-info" href={this.props.link}>Read More</a></p>
              </div>
            </div>
        </div>
    </div>
  </div>;
  }
}