import React, { Component } from 'react';
import Panner from '../search/Panner';
import Menu from '../Menu';
import Style1 from "./Style1";
import Style2 from "./Style2";
import Style8 from "./Style8";
import About_1 from "./About_Style_2/About_1";
import '../contact/Content_Classic.scss';
import "./About_Style_2.scss";
class About_Style_2 extends Component {
    render() {
        return (
            <div className="about-style-2">
                <Menu />
                <div className="panner">
                    <Panner main="ABOUT STYLE 2" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="container">
                    <div className="text-title">
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit Suspendisse et justo Praesent <br/> mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est <br/> Curabitur eget orc Cras laoreet ligul Etiam</p>
                    </div>
                </div>
                <Style1 />
                <Style2 />
                <Style8 emptitle="Employment" emptext="Professional Skills" />
                <About_1/>
            </div>
        );
    }
}

export default About_Style_2;