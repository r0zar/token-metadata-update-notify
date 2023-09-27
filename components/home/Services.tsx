import React from 'react';

const Services = () => {
  return (
    <section id="about-boxes" className="about-boxes">
      <div className="container">
        <div className="section-title">
          <h2>It Works</h2>
          <p>How It Works</p>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
            <div className="card">
              
              <div className="card-icon">
                <i className="ri-brush-4-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Sellect Token</a></h5>
                <p className="card-text">
                Begin by selecting the specific token you want to monitor for updates. Whether its an NFT, cryptocurrency, or any other blockchain asset, our platform supports a wide range of tokens.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
            <div className="card">
              
              <div className="card-icon">
                <i className="ri-calendar-check-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Enter Contract Identifier</a></h5>
                <p className="card-text">
                Provide the contract identifier associated with your chosen token. This ensures that we track the metadata changes accurately for your unique asset.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
            <div className="card">
              
              <div className="card-icon">
                <i className="ri-movie-2-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Specify Token IDs</a></h5>
                <p className="card-text">
                To receive updates for specific instances of your token, enter the relevant Token IDs. This step allows you to stay informed about changes that matter most to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
