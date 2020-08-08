import React, { Component } from 'react';
import Panner from "../search/Panner";
import Side_Bar from "../shop/Side_Bar";
import Accodion from "./Accodion";
import "../shopping_card/Shopping_Card.scss";
import Menu from "../Menu";
class FAQ_Style_1 extends Component {
    render() {
        return (
            <div className="faq">
                <Menu />
                <div className="panner_v2">
                    <Panner main="FAQ STYLE 1" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="container">
                    <div className="row">   
                        <div className="col-md-8">
                          <Accodion />
                        </div>
                        <div className="col-md-4">
                            <Side_Bar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ_Style_1;