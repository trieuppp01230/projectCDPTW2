import React, { Component } from 'react';
import Box_Porfolio from './Box_Porfolio';
import "../home/Porfolio.scss";
import Panner from '../search/Panner';
import Menu from '../Menu';
import '../contact/Content_Classic.scss';

class Modern extends Component {
    render() {
        return (
            <div className="modern">
                <Menu />
                <div className="panner">
                    <Panner main="PORTFOLIO" sub="PORTFOLIO MODERN" />
                </div>
                <div className="container">
                    <div className="nav_menu">
                        <ul className="nav_menu_list clearfix">
                            <li className="nav_menu_list_item"><a className="nav_menu_list_item_link link-default active" data-filter="all">Show All</a>
                            </li>
                            <li className="nav_menu_list_item"><a className="nav_menu_list_item_link link-default" data-filter="print">Print</a></li>
                            <li className="nav_menu_list_item"><a className="nav_menu_list_item_link link-default" data-filter="webdesign">Web Design</a></li>
                            <li className="nav_menu_list_item"><a className="nav_menu_list_item_link link-default" data-filter="graphic">Graphic</a></li>
                            <li className="nav_menu_list_item"><a className="nav_menu_list_item_link link-default" data-filter="motion">Motion</a></li>
                        </ul>
                    </div>
                    <div className="category">
                        <div className="row category_list">
                            <div className="col-md-3 category_list_item filter graphic">
                                <Box_Porfolio img="images/pof1.jpg" />
                            </div>
                            <div className="col-md-3 category_list_item filter print">
                                <Box_Porfolio img="images/pof2.jpg" />
                            </div>
                            <div className="col-md-3 category_list_item filter webdesign">
                                <Box_Porfolio img="images/pof3.jpg" />
                            </div>
                            <div className="col-md-3 category_list_item filter webdesign">
                                <Box_Porfolio img="images/pof4.jpg" />
                            </div>
                            <div className="col-md-3 category_list_item filter print">
                                <Box_Porfolio img="images/pof5.jpg" />
                            </div>
                            <div className="col-md-3 category_list_item filter print">
                                <Box_Porfolio img="images/pof6.jpg" />
                            </div>
                            <div className="col-md-3 category_list_item filter print" >
                                <Box_Porfolio img="images/pof1.jpg" />
                            </div>
                            <div className="col-md-3 category_list_item filter webdesign">
                                <Box_Porfolio img="images/pof2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modern;