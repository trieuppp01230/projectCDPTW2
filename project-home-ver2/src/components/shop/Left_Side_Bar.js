import React, { Component } from 'react';
import Panner from "../search/Panner";
import Side_Bar from "./Side_Bar";
import Feauter_Product from "./Feauter_Product";
import "../shopping_card/Shopping_Card.scss";
import "./Shop.scss";
import Menu from "../Menu";
class Left_Side_Bar extends Component {
    render() {
        return (
            <div className="full-side-bar">
                <Menu />
                <div className="panner_v2">
                    <Panner main="SHOP LEFT SIDEBAR" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Side_Bar />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-4.jpg" title="Designer top" />
                                </div>
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-5.jpg" title="Jean & Teashirt" />
                                </div>
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-6.jpg" title="Beautiful Green Dress" />
                                </div>
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-7.jpg" title="Casual dress" />
                                </div>
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-8.jpg" title="Mens Suit" />
                                </div>
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-9.jpg" title="Beautiful Green Dress" />
                                </div>
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-10.jpg" title="Casual Shoes" />
                                </div>
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-11.jpg" title="Mens Suit" />
                                </div>
                                <div className="col-md-4">
                                    <Feauter_Product img="images/sp-12.jpg" title="Leather Bag" />
                                </div>
                            </div>
                            <div className="pagination">
                                <ul>
                                    <li><a className="pagi active" href="">1</a></li>
                                    <li><a className="pagi" href="">2</a></li>
                                    <li><a className="pagi" href="">>></a></li>
                                    <li><a className="pagi" href="">End</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Left_Side_Bar;