import React, { Component } from "react";
import Hv_Creative from "./Hv_Creative";
import "./TeamCreative.scss"

class Full_Creative extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Hv_Creative img="images/imgParallax/20.png" titlecr="Matthew" subcr="Founder and CEO"/>
          </div>
          <div className="col-md-3">
            <Hv_Creative img="images//imgParallax/22.png" titlecr="Jennifer" subcr="Designer"
            />
          </div>
          <div className="col-md-3">
            <Hv_Creative img="images//imgParallax/38.png" titlecr="William" subcr="Marketing"/>
          </div>
          <div className="col-md-3">
            <Hv_Creative img="images//imgParallax/21.png" titlecr="Charlotte" subcr="Developer"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Full_Creative;
