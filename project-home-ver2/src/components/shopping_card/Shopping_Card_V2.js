import React, { Component } from 'react';
import Panner from '../search/Panner';
import Shopping from './Shopping';
import Menu from '../Menu';
import './Shopping_Card.scss';

class Shopping_Card_V2 extends Component {
    render() {
        return (
            <div>
            <Menu/>
                 <div className="panner_v2">
                    <Panner main="SHOPPING CART" sub="GET MANY MORE FEATURES"/>
                </div>
                <Shopping />
            </div>
        );
    }
}

export default Shopping_Card_V2;