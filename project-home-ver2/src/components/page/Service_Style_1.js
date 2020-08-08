import React, { Component } from 'react';
import Panner from '../search/Panner';
import Menu from '../Menu';
import Style4 from "./Style4";
import Style8 from "./Style8";
import FooterModern_69 from "./FooterModern_69";
import '../contact/Content_Classic.scss';
class About_Style_1 extends Component {
    render() {
        return (
            <div>
                <Menu />
                    <div className="panner">
                        <Panner main="SERVICE STYLE 1" sub="GET MANY MORE FEATURES" />
                    </div>
                    
                    <Style4 />
                    <FooterModern_69/>
            </div>
        );
    }
}

export default About_Style_1;