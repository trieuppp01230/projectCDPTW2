import React, { Component } from 'react';
import './Content_Modern.scss'

class Content_Modern extends Component {
    render() {
        return (
            <div className="baner-content">
            <div className="img-baner">
                <div className="container">
                    <div className="button-video">
                      <div><i className="icon fa fa-play" aria-hidden="true"></i></div>
                    </div>
                    <div className="title_first">
                        <h2>Add your own Youtube Videos <br />
                            <span className="second-title">for Successful Business</span>
                        </h2>
                    </div>
                </div>
            </div>
          <div className="back-cotent">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-header">
                          <div className="col-adon-header">
                              <img src="images/header-modern/header_1.png" alt="" className="addon-img-header" />
                              <div className="adon-infor-header">
                                  <h4 className="adon-title-header">Wireframes</h4>
                                  <div className="adon-text-header">
                                      <p className="textitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                          Suspendisse et justo.</p>
                                      <a className="btn-button"><i className="fa fa-play-circle"
                                              aria-hidden="true"></i>Read more</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-header">
                          <div className="col-adon-header">
                              <img src="images/header-modern/header_2.png" alt="" className="addon-img-header" />
                              <div className="adon-infor-header">
                                  <h4 className="adon-title-header">Design Mockups</h4>
                                  <div className="adon-text-header">
                                      <p className="textitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                          Suspendisse et justo.</p>
                                      <a className="btn-button"><i className="fa fa-play-circle"
                                              aria-hidden="true"></i>Read more</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-header">
                          <div className="col-adon-header">
                              <img src="images/header-modern/header_3.png" alt="" className="addon-img-header" />
                              <div className="adon-infor-header">
                                  <h4 className="adon-title-header">Development</h4>
                                  <div className="adon-text-header">
                                      <p className="textitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                          Suspendisse et justo.</p>
                                      <a className="btn-button"><i className="fa fa-play-circle"
                                              aria-hidden="true"></i>Read more</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        );
    }
}

export default Content_Modern;