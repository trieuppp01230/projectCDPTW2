import React, { Component } from 'react';
import Panner from "../search/Panner";
import "../shopping_card/Shopping_Card.scss";
import Menu from "../Menu";
import Classic_Side_Bar from './Classic_Side_Bar';
import './Blog.scss';
class Blog_Four_Column extends Component {
    render() {
        return (
            <div className="grid-column">
                <Menu />
                <div className="panner">
                    <Panner main="BLOG FOUR COLUMN" sub="GET MANY MORE FEATURES" />
                </div>
                <div class="container column">
                    <div class="row">
                        <div class="col-md-3">
                            <Classic_Side_Bar img="images/22.jpg" title="DONEC LIBERO PURUS PULVINAR"/>
                        </div>
                        <div class="col-md-3">
                            <Classic_Side_Bar img="images/23.jpg" title="MAECENAS NISL LECTUS IMPERDIET"/>
                        </div>
                        <div class="col-md-3">
                            <Classic_Side_Bar img="images/24.jpg" title="FERMENTUM AMET TORTOR VESTIBULUM"/>
                        </div>
                        <div class="col-md-3">
                            <Classic_Side_Bar img="images/2.jpg" title="PRAESENT MATTIS COMMODO AUGUE ALIQUAM AMET"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog_Four_Column;