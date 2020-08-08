import React, { Component } from 'react';
import Panner from '../search/Panner';
import Menu from '../Menu';
import Style3 from "./Style3";
import Style2 from "./Style2";
import Style4 from "./Style4";
import Style6 from "./Style6";
import Box_Classic from "./Box_Classic"
import '../contact/Content_Classic.scss';
import "./About_Style_3.scss";
import Style7 from './Style7';

class About_Style_3 extends Component {
    render() {
        return (
            <div className="about-style-3">
                <Menu />
                <div className="panner">
                    <Panner main="ABOUT STYLE 3" sub="GET MANY MORE FEATURES" />
                </div>
                <Style6 />
                <Style3 />
                <Style2 />
                <div className="container">
                    <div className="content-infor">
                        <span>Meet Our Creative Team</span>
                        <div className="content">
                            <h2 className="title">
                            Meet Our Expert Team and get Support and Discounts
                            </h2>
                            <div className="yellow"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Box_Classic img="images/classic/11.png" title="Matthew" sub="Founder and CEO" />
                        </div>
                        <div className="col-md-3">
                            <Box_Classic img="images/classic/12.png" title="Margaret" sub="UI Designer" />
                        </div>
                        <div className="col-md-3">
                            <Box_Classic img="images/classic/13.png" title="Benjamin" sub="Marketing" />
                        </div>
                        <div className="col-md-3">
                            <Box_Classic img="images/classic/14.png" title="Jennifer" sub="Support" />
                        </div>
                    </div>
                </div>
                <Style4 />
                <Style7/>
            </div>
            
        );
    }
}

export default About_Style_3;