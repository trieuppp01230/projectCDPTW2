import React, { Component } from 'react';
import Panner from '../search/Panner';
import Menu from '../Menu';
import Style2 from "./Style2";
import Style4 from "./Style4";
import Style8 from "./Style8";
import Style10 from "./Style10";
import '../contact/Content_Classic.scss';
class About_Style_1 extends Component {
    render() {
        return (
            <div>
                <Menu />
                    <div className="panner">
                        <Panner main="SERVICE STYLE 2" sub="GET MANY MORE FEATURES" />
                    </div>
                    <Style8 emptitle="Our Services" emptext="Our Excellent Services" />
                    <Style10/>
                    <Style2/>
                    <Style4 />
            </div>
        );
    }
}

export default About_Style_1;