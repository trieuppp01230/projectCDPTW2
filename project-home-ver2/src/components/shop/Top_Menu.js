import React, { Component } from 'react';

class Top_Menu extends Component {
    render() {
        return (
            <div class="container">
                <h3 class="feauter-title">Featured Products</h3>
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="sppb-addon-content">
                                    <ul className="toplist clearfix">
                                        <li className="rightl">Customer Care</li>
                                        <li>(888) 123-4567</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="sppb-addon-content">
                                    <ul className="toplist clearfix social">
                                        <li className="lineright"><a href="#">Login</a></li>
                                        <li className="lineright"><a href="#">Register</a></li>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                        <li className="last"><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Top_Menu;