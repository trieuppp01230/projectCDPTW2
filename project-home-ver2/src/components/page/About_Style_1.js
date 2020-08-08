import React, { Component } from 'react';
import Panner from '../search/Panner';
import Menu from '../Menu';
import About_Company from "../home/About_Company";
import Page_Content_Two from "../home/Page_Content_Two";
import Style1 from "./Style1";
import About_Style_4 from "./About_Style_4";
import '../contact/Content_Classic.scss';
import "./About_Style_1.scss";
class About_Style_1 extends Component {
    render() {
        return (
            <div className="about-style-1">
                <Menu />
                <div className="panner">
                    <Panner main="ABOUT STYLE 1" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="about-company">
                    <About_Company />
                </div>
                <div className="content_two">
                    <div className="container">
                        <div className="row">
                        <Page_Content_Two
                            img="images/197.jpg"
                            sub="About Company"
                            main="Creative Digital Agency"
                        />
                        <Page_Content_Two
                            img="images/198.jpg"
                            sub="We Design Quality"
                            main="Multipurpose Design"
                        />
                        <Page_Content_Two
                            img="images/199.jpg"
                            sub="Our Journey"
                            main="Know About Success"
                        />
                        </div>
                    </div>
                </div>
                <Style1/>
                <About_Style_4 />
            </div>
        );
    }
}

export default About_Style_1;