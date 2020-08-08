import React, { Component } from 'react';
import Top_Menu from "../shop/Top_Menu";
import Menu from '../Menu';
import Panner from '../search/Panner';
import Style6 from "../page/Style6";
import Style7 from "../page/Style7";
import Style8 from "../page/Style8";
import Header22 from "./Header22";
import About9 from "./About9";
import Foter_modern from "./Foter_modern";
import Map from "./Map";
import FooterSimple_25 from "./FooterSimple_25";
import OtherPage_Careers from "./OtherPage_Careers";
import './Header_Dark.scss'
class Header_Dark extends Component {
    render() {
        return (
            <div className="header-dark">
                <Top_Menu />
                <Menu/>
                <div className="panner">
                    <Panner main="ABOUT ME" sub="GET MANY MORE FEATURES" />
                </div>
                <Style6 />  
                <Style7 />
                <Style8 emptitle="Employment" emptext="Professional Skills" />
                <About9/>
                <Header22 />
                <FooterSimple_25 />
                <OtherPage_Careers/>
                <Foter_modern/>
                <Map/>
            </div>
        );
    }
}

export default Header_Dark;