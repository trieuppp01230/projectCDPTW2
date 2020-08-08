import React, { Component } from 'react';
import Header22_right from "./Header22_right";
import Header22_left from "./Header22_left";
import "./Header.scss";

import "./Header22_right";
class Header22 extends Component {
    constructor(props) {
        super(props);
        }
    render() {
        return (
            <div className="header-22 container">
                <div className="row">
                    <div className="col-md-7">
                        <Header22_left/>
                    </div>
                    <div className="col-md-5">
                        <Header22_right icon= "fa fa-camera" boxTitle="Who We Are" />
                        <div className="khoangcach">
                            <div></div>
                        </div>
                        <Header22_right icon="fa fa-list-alt" boxTitle="Company Success" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header22;