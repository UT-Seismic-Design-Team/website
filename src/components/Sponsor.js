import React, { Component } from 'react';
import "./Sponsor.css"

const SponsorCard = ({sponsor, year, sponsorLevel}) => {
  return (
    <div>
      <button
        className="sponsorImageButton"
        data-toggle="modal"
        data-target={`#myModal${sponsor.name.replace(/ /g, "")}`}
      >
        <img
          className={`${sponsorLevel}SponsorImage`}
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
      {data?.gold && (
        <div className="w-100 partners goldSponsors">
          <div>
            <h3>Gold Sponsors</h3>
            <div className="sponsorsList">
              {data.gold.map((sponsor) => {
                return (
                  // <div>
                  //   <button
                  //     className="sponsorButton"
                  //     data-toggle="modal"
                  //     data-target={`#${data.year}${sponsor.name}`}
                  //   >
                  //     <img
                  //       className="goldSponsorImage"
                  //       src={require(`../images/Sponsors/${sponsor.logo}`)}
                  //       alt={sponsor.name}
                  //     />
                  //   </button>
                  //   <div
                  //     className="modal fade"
                  //     id={`#${data.year}${sponsor.name}`}
                  //     role="dialog"
                  //   >
                  //     <div className="modal-dialog">
                  //       <div className="modal-content">
                  //         <div className="modal-header">
                  //           <h4 className="modal-title">{sponsor.name}</h4>
                  //           <button
                  //             type="button"
                  //             className="close"
                  //             data-dismiss="modal"
                  //           >
                  //             &times;
                  //           </button>
                  //         </div>
                  //         <div className="modal-body">
                  //           <p>{sponsor.description}</p>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                  <SponsorCard
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
      {data?.silver && (
        <div className="partners silverSponsors">
          <div>
            <h3>Silver Sponsors</h3>
            <div className="sponsorsList">
              {data.silver.map((sponsor) => {
                return (
                  <SponsorCard
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
      {data?.bronze && (
        <div className="partners bronzeSponsors">
          <div>
            <h3>Bronze Sponsors</h3>
            <div className="sponsorsList">
              {data.silver.map((sponsor) => {
                return (
                  <SponsorCard
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