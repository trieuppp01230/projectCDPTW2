import React, { Component } from 'react';
import "./Team_Classic.scss";
class Box_Classic extends Component {
    render() {
        return (
            <div className="bg-content">
            <div className="img-box">
              <div className="overlay">
                <div className="img">
                  <img src={this.props.img} alt="img-reponsive" />
                  <p className="small-text text-center">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Suspendisse et justo.
                  </p>
                  <ul className="icon-pp">
                    <li>
                      <a className="a a1" href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a className="a a2" href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a className="a a3" href="">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a className="a a4" href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-box text-center">
              <h5 className="h5-title">{this.props.title}</h5>
              <p className="subtext">{this.props.sub}</p>
            </div>
          </div>
        );
    }
}

export default Box_Classic;