import React, { Component } from "react";
import Panner from "../search/Panner";
import Feauter_Product from "./Feauter_Product";
import "../shopping_card/Shopping_Card.scss";
import "./Shop.scss";
import Menu from  "../Menu";

class Gird_Three extends Component {
    render() {
        return (
            <div>
            <Menu />
                <div className="panner_v2">
                    <Panner main="SHOP FOUR COLUMNS" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="container">
                    <div className="row gird">
                        <div className="col-md-3">
                                <Feauter_Product img="images/sp-4.jpg" title="Designer top" />
                        </div>
                        <div className="col-md-3">
                                <Feauter_Product img="images/sp-5.jpg" title="Jean & Teashirt"/>
                        </div>
                        <div className="col-md-3">
                                <Feauter_Product img="images/sp-6.jpg" title="Beautiful Green Dress"/>
                        </div>
                        <div className="col-md-3">
                                <Feauter_Product img="images/sp-7.jpg" title="Casual dress"/>
                        </div>
                        <div className="col-md-3">
                                <Feauter_Product img="images/sp-9.jpg" title="Mens Suit"/>
                        </div>
                        <div className="col-md-3">
                                <Feauter_Product img="images/sp-10.jpg" title="Beautiful Green Dress"/>
                        </div>
                        <div className="col-md-3">
                                <Feauter_Product img="images/sp-11.jpg" title="Casual Shoes"/>
                        </div>
                        <div className="col-md-3">
                                <Feauter_Product img="images/sp-12.jpg" title="Mens Suit"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gird_Three;
