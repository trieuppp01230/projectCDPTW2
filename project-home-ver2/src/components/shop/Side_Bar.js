import React, { Component } from "react";
import Panner from "../search/Panner";
import "../shopping_card/Shopping_Card.scss";
import "./Shop.scss";

class Side_Bar extends Component {
  render() {
    return (
          <div className="side-bar">
           <div className="box-side-bar">
              <h3 className="title">Search</h3>
              <input className="input" placeholder="Search"></input>
            </div>
            <div className="box-side-bar">
              <h3 className="title">Categories</h3>
              <ul className="list-category">
                <li>Business</li>
                <li>Education</li>
                <li>Travel</li>
                <li>Creative</li>
                <li>Wedding</li>
                <li>Restaurant</li>
              </ul>
            </div>
            <div className="box-side-bar">
                <h3 className="title">LATEST POSTS</h3>
                <div className="box-post clearfix">
                        <div className="img">
                                <img src="images/22.jpg" alt=""/>
                        </div>
                        <div className="desc">
                                <span className="name">DONEC LIBERO PURUS PULVINAR</span>
                                <small>16 May 2018</small>
                        </div>
                </div>
                <div className="box-post clearfix">
                        <div className="img">
                                <img src="images/23.jpg" alt=""/>
                        </div>
                        <div className="desc">
                                <span className="name">DONEC LIBERO PURUS PULVINAR</span>
                                <small>16 May 2018</small>
                        </div>
                </div>
                <div className="box-post clearfix">
                        <div className="img">
                                <img src="images/24.jpg" alt=""/>
                        </div>
                        <div className="desc">
                                <span className="name">DONEC LIBERO PURUS PULVINAR</span>
                                <small>16 May 2018</small>
                        </div>
                </div>
              </div>
              <div className="box-side-bar">
                <h3 className="title">Tags</h3>
                <ul className="list-content clearfix">
                        <li>Amination</li>
                        <li>Art</li>
                        <li>Photography</li>
                        <li>Design</li>
                        <li>Responsive</li>
                        <li>Develop</li>
                        <li>Branding</li>
                        <li>Clean</li>
                </ul>
            </div>
            <div className="box-side-bar">
              <h3 className="title">Newsletter</h3>
              <input className="input email" placeholder="Email"></input>
              <button className="submit">Submit</button>
            </div>
            <div className="box-side-bar">
              <h3 className="title">Featured Works</h3>
              <ul className="list-img clearfix">
                        <li><img src="images/p13.jpg" alt=""/> </li>
                        <li><img src="images/p14.jpg" alt=""/> </li>
                        <li><img src="images/p15.jpg" alt=""/> </li>
                        <li><img src="images/p12.jpg" alt=""/> </li>
                        <li><img src="images/p11.jpg" alt=""/> </li>
                        <li><img src="images/p14.jpg" alt=""/> </li>
                </ul>
            </div>
          </div>
    );
  }
}

export default Side_Bar;
