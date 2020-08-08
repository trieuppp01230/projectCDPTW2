import React, { Component } from 'react';
import Panner from '../search/Panner';
import Content from '../contact/Content';
import Menu from '../Menu';
import '../contact/Content_Classic.scss';
class Contact_Classic_Full extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="panner">
                    <Panner main="CONTACT FULL WIDTH MAP" sub="GET MANY MORE FEATURES"/>
                </div>
                <Content />
            </div>
        );
    }
}

export default Contact_Classic_Full;