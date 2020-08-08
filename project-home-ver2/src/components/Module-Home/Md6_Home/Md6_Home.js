import React, { Component } from 'react';
import Md6_Home_Box from "./Md6_Home_Box";
import "./Md6_Home.scss"

class Md6_Home extends Component {
    render() {
        return (
            <div className="md6-home">
            <div className="container">
              <div className="row">
                <Md6_Home_Box
                  img="images/197.jpg"
                  sub="About Company"
                  main="Creative Digital Agency"
                />
                <Md6_Home_Box
                  img="images/198.jpg"
                  sub="We Design Quality"
                  main="Multipurpose Design"
                />
                <Md6_Home_Box
                  img="images/199.jpg"
                  sub="Our Journey"
                  main="Know About Success"
                />
              </div>
            </div>
          </div>
        );
    }
}

export default Md6_Home;