import React, { Component } from 'react';
import Top_Menu from "../shop/Top_Menu";
import Menu from "../Menu";
import MenuLeft_img30 from "./MenuLeft_img30";
import Style1 from "../page/Style1";
import Page_Content_Six from "../home/Page_Content_Six";
import Menustyle_img33 from "./Menustyle_img33";
import Img32_Menustyle from "./Img32_Menustyle";
import Menustyle from "./Menustyle";
import "./Menu_Transparent.scss";

class Menu_Transparent extends Component {
    render() {
        return (
            <div className="menu-transparent">
                <Top_Menu />
                <Menu />
                <div  className="chuatrong"></div>
                <Img32_Menustyle />
                <MenuLeft_img30/>
                <Style1/>
                <div className="content_six">
                    <Page_Content_Six />
                </div>
                <Menustyle_img33/>
                <Menustyle />
            </div>
        );
    }
}

export default Menu_Transparent;