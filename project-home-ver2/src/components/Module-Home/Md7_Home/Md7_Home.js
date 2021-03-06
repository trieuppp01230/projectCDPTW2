import React, { Component } from 'react';
import Md7_Home_Box from "./Md7_Home_Box";
import "./Md7_Home.scss";

class Md7_Home extends Component {
    render() {
        return (
            <div className="container">
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
                  <div className="col-md-3 category_list_item filter graphic">
                     <Md7_Home_Box img="images/pof1.jpg"/>
                  </div>
                  <div className="col-md-3 category_list_item filter print">
                  <Md7_Home_Box img="images/pof2.jpg"/>
                  </div>
                  <div className="col-md-3 category_list_item filter webdesign">
                  <Md7_Home_Box img="images/pof3.jpg"/>
                  </div>
                  <div className="col-md-3 category_list_item filter webdesign">
                  <Md7_Home_Box img="images/pof4.jpg"/>
                  </div>
                  <div className="col-md-3 category_list_item filter print">
                  <Md7_Home_Box img="images/pof5.jpg"/>
                  </div>
                  <div className="col-md-3 category_list_item filter print">
                  <Md7_Home_Box img="images/pof6.jpg"/>
                  </div>
                  <div className="col-md-3 category_list_item filter print" >
                  <Md7_Home_Box img="images/pof1.jpg"/>
                  </div>
                  <div className="col-md-3 category_list_item filter webdesign">
                  <Md7_Home_Box img="images/pof2.jpg"/>
                  </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Md7_Home;