import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="col-inner">
             <Link to='/'>
              <div className="logo">
                <img src="images/logo.png" alt="" />
              </div>
              </Link>
              <div className="desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Suspendisse et justo. Praesent mattis
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-inner">
              <h3 className="title">About Us</h3>
              <div className="content">
                <ul className="list-content padding">
                  <li className="list">Placerat bibendum</li>
                  <li className="list">Ullamcorper odio nec turpis</li>
                  <li className="list">Aliquam porttitor vestibulum ipsum</li>
                  <li className="list">Lobortis enim nec nisi</li>
                  <li className="list">Placerat bibendum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-inner">
              <h3 className="title">Quick Links</h3>
              <div className="content">
                <ul className="list-content padding">
                  <li className="list">Placerat bibendum</li>
                  <li className="list">Ullamcorper odio nec turpis</li>
                  <li className="list">Aliquam porttitor vestibulum ipsum</li>
                  <li className="list">Lobortis enim nec nisi</li>
                  <li className="list">Placerat bibendum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-inner">
              <h3 className="title">Contact Us</h3>
              <div className="text-block">
                <div className="sppb-addon-content">
                  <address>
                    <strong>Address:</strong> No.28 - 63739 street lorem ipsum,
                    ipsum City, Country
                  </address>
                  <div className="phone">
                    <strong>Phone:</strong> + 1 (234) 567 8901{" "}
                  </div>
                  <div className="email">
                    <strong>Email:</strong> support@yoursite.com{" "}
                  </div>
                  <div className="fax">
                    <strong>Fax:</strong> + 1 (234) 567 8901
                  </div>
                  <div className="social-list-icon">
                    <ul className="social-icon clearfix padding">
                      <li className="icon">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </li>
                      <li className="icon">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </li>
                      <li className="icon">
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </li>
                      <li className="icon">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </li>
                      <li className="icon">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </li>
                    </ul>
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

export default Footer;
