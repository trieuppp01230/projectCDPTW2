import React, { Component } from 'react';
import Box_Porfolio from '../porfolio/Box_Porfolio';
import Page_Content_Four from '../home/Page_Content_Four';
import './Porfo_Modern.scss'
class Porfo_Modern extends Component {
    render() {
        return (
            <div className='porfo-modern'>
                <div className="box-information">
                    <div className="information">
                        <span>Awesome Portfolio Styles</span>
                        <div className="addon-content">
                            <h3 className="title">Get Beautiful Portfolio Styles and Animations Styles</h3>
                            <div className="yellow"></div>
                        </div>
                    </div>
                </div>
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
                            <div className="col-md-4 category_list_item filter graphic">
                                <Box_Porfolio img="images/pof1.jpg" />
                            </div>
                            <div className="col-md-4 category_list_item filter print">
                                <Box_Porfolio img="images/pof2.jpg" />
                            </div>
                            <div className="col-md-4 category_list_item filter webdesign">
                                <Box_Porfolio img="images/pof3.jpg" />
                            </div>
                            <div className="col-md-4 category_list_item filter webdesign">
                                <Box_Porfolio img="images/pof4.jpg" />
                            </div>
                            <div className="col-md-4 category_list_item filter print">
                                <Box_Porfolio img="images/pof5.jpg" />
                            </div>
                            <div className="col-md-4 category_list_item filter print">
                                <Box_Porfolio img="images/pof6.jpg" />
                            </div>
                        </div>
                    </div>

                    <Page_Content_Four />
                </div>
        );
    }
}

export default Porfo_Modern;