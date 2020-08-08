import React, { Component } from 'react';
import Top_Menu from '../shop/Top_Menu';
import Menu from '../Menu';
import Panner from '../search/Panner';
import '../contact/Content_Classic.scss';
import '../home/Porfolio.scss';
import Box_Porfo_V2 from './Box_Porfo_V2';
import './Box_Porfo_V2.scss'
class Pof_Three_Column extends Component {
    render() {
        return (
            <div className="porfoli">
                <Top_Menu/>
                <Menu/>
                <div className="panner">
                        <Panner main="PORTFOLIO" sub="CREATE PORTFOLIO IN THREE COLUMN" />
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
                            <div className="col-md-4 filter graphic">
                                <Box_Porfo_V2 img="images/pof1.jpg"/>
                            </div>
                            <div className="col-md-4 filter print">
                                <Box_Porfo_V2  img="images/pof2.jpg"/>
                            </div>
                            <div className="col-md-4 filter webdesign">
                                <Box_Porfo_V2  img="images/pof3.jpg"/>
                            </div>
                            <div className="col-md-4 filter webdesign">
                                <Box_Porfo_V2  img="images/pof4.jpg"/>
                            </div>
                            <div className="col-md-4 filter print">
                                <Box_Porfo_V2  img="images/pof5.jpg"/>
                            </div>
                            <div className="col-md-4 filter print">
                                <Box_Porfo_V2 img="images/pof6.jpg"/>
                            </div>
                            <div className="col-md-4 filter print" >
                                <Box_Porfo_V2  img="images/pof1.jpg"/>
                            </div>
                            <div className="col-md-4 filter webdesign" >
                                <Box_Porfo_V2  img="images/pof2.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pof_Three_Column;