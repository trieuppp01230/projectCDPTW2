import React, { Component } from 'react';
import Panner from "../search/Panner";
import Side_Bar from "../shop/Side_Bar";
import "../shopping_card/Shopping_Card.scss";
import Classic_Side_Bar from './Classic_Side_Bar';
import Menu from "../Menu";
class Classic_Right_Side_Bar extends Component {
    render() {
        return (
            <div className="classic-side-bar">
                <Menu />
                <div className="panner">
                    <Panner main="BLOG RIGHT SIDEBAR" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Classic_Side_Bar img="images/22.jpg" title="DONEC LIBERO PURUS PULVINAR"/>
                            <Classic_Side_Bar img="images/23.jpg" title="FERMENTUM AMET TORTOR VESTIBULUM"/>
                            <Classic_Side_Bar img="images/24.jpg" title="MAECENAS NISL LECTUS IMPERDIET"/>

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

export default Classic_Right_Side_Bar;