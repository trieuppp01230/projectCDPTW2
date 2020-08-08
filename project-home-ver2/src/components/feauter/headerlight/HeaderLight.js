import React, { Component } from 'react';
import "./HeaderLight.scss";

export default class HeaderLight extends Component {
  render() {
    return (
      <div className="container-fluid header-light-first">
        <div className="row">
          <div className="col-md-6">
            <div className="column-6-bg-img">
              <div className="header-text-block">
                <div className="h3-title-headerL">
                  We develop user interface Applications animations &amp; icons.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="column-6-text-headerL">
              <div className="text-block-6">
                <h5 className="h5-text-title-column-6">
                  Multipage Clean Template
                </h5>
                <div className="text-content-headerL">
                  <div className="sec-titleleft-content text-left">
                    <h2 className="h2-text-column6-headerL">
                      Many more Features and Consepts included
                    </h2>
                    <div className="sec-title-line-headerL">&nbsp;</div>
                  </div>
                  {/* Icon 1 */}
                  <div className="iconlist-headerL-2">
                    <div className="icon-headerL">
                      <i
                        className="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="text-span-headerL">
                      &nbsp; Pellentesque sit amet augue eu orci cursus
                      fermentum.
                    </div>
                  </div>
                  {/* Icon 2 */}
                  <div className="iconlist-headerL-2">
                    <div className="icon-headerL">
                      <i
                        className="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="text-span-headerL">
                      &nbsp; Maecenas fringilla orci ultrices nulla consectetur
                      id.
                    </div>
                  </div>
                  {/* Icon 3 */}
                  <div className="iconlist-headerL-2">
                    <div className="icon-headerL">
                      <i
                        className="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="text-span-headerL">
                      &nbsp; Fringilla orci ultrices nulla consectetur id
                      suscipit .
                    </div>
                  </div>
                  {/* Icon 4 */}
                  <div className="iconlist-headerL-2">
                    <div className="icon-headerL">
                      <i
                        className="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="text-span-headerL">
                      &nbsp; Maecenas fringilla orci ultrices nulla consectetur
                      id.
                    </div>
                  </div>
                </div>
              </div>
              <div className="empty-space-hearlight"></div>
              <div className="sec-button-headerlight text-left">
                <button className="btn btn-header-light btn-dark text-uppercase">
                  <i className="fa fa-play-circle" aria-hidden="true"></i> Read
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
