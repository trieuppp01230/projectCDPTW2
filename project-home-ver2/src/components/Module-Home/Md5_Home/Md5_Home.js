import React, { Component } from 'react';
import Md5_Home_Addon from "./Md5_Home_Addon";
import "./Md5_Home.scss";

class Md5_Home extends Component {
    render() {
        return (
            <div>
                 <div className="md5-pn"><i className="icon fa fa-play" aria-hidden="true"></i></div>
                 <div className="addon-feature">
                    <div className="container">
                        <div className="row wp-row">
                        <Md5_Home_Addon img="images/8.jpg" title="Wireframes" />
                        <Md5_Home_Addon img="images/9.jpg" title="Design Mockup" />
                        <Md5_Home_Addon img="images/10.jpg" title="Development" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Md5_Home;