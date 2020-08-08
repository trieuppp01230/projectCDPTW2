import React, { Component } from 'react';
import Top_Menu from "../shop/Top_Menu";
import Menu from '../Menu';
import Style1 from "../page/Style1";
import Style8 from "../page/Style8";
import Style10 from "../page/Style10";
import HeaderLight from "./headerlight/HeaderLight";
import Header_white25 from "./Header_white25";
import Img26_Header from "./Img26_Header";
import Header23 from "./headerlight/Header23";
import Nav_HeaderModern from "./Nav_HeaderModern";
import './Header_Light.scss'
class Header_Light extends Component {
    render() {
        return (
            <div className="header-light">
                <Top_Menu />
                <Menu/>
                <Nav_HeaderModern />
                <Style8 emptitle="Our Services" emptext="Our Excellent Services" />
                <Style10 />
                <Style1 />
                <Header23 />
                <HeaderLight/>
                <Header_white25/>
                <Img26_Header />
            </div>
        );
    }
}

export default Header_Light;