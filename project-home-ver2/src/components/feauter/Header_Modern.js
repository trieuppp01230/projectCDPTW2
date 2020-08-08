import React, { Component } from 'react';
import Menu from '../Menu';
import About_Company from '../home/About_Company';
import Content_Modern from './Content_Modern';
import Porfo_Modern from './Porfo_Modern';
import Page_Content_Eight from "../home/Page_Content_Eight";
import Page_Content_Six from "../home/Page_Content_Six";
import './Header_Modern.scss'

class Header_Modern extends Component {
    render() {
        return (
            <div className="header-modern">
                <Menu />
                <div class="wp-panner-start">
                    <div class="container panner-start">
                        <div class="row start">
                            <div class="col-md-4">  <Page_Content_Eight icon="fa fa-address-book-o" title="Fully Responsive"/></div>
                            <div class="col-md-4"> <Page_Content_Eight icon="fa fa-link" title="Classic Styles" /></div>
                            <div class="col-md-4"> <Page_Content_Eight icon="fa fa-bolt" title="Secure Services" /></div>
                        </div>
                    </div>
                </div>
                <About_Company />
                <Content_Modern />
                <Porfo_Modern />
                <div className="content_six">
                    <Page_Content_Six />
                </div>
            </div>
        );
    }
}

export default Header_Modern;