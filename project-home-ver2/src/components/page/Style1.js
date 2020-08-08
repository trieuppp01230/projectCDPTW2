import React, { Component } from 'react';
import "./Style1.scss";

class Style1 extends Component {
    render() {
        return (
            <div className="style1">
                <div className="container">
                    <div className="row">
                        <div className="cot">
                            <div className="col-md-6">
                                <img className="imgs" src='images/img-about-style1/about1.png' />
                            </div>
                            <div className="col-md-6">
                                <div className="sppb-addon">
                                    <h5 className="sppb-addon-title">
                                        Pixel Perfect Design with Classy
                            </h5>
                                    <div className="sppb-addon-content">
                                        <h2 className="nd">
                                            Beautifully Crafted Design with Classic Graphic Styles
                                </h2>
                                        <div className="ce-title-line align-left"></div>
                                    </div>
                                    <div className="sppb-addon-text">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet ligula. Etiam sit amet dolor. Vestibulum ante ipsum primis.
                            </div>
                                    <div className="check">
                                        <div className="row">
                                            <div className="col-md-6 nopadding">
                                                <ul className="list">
                                                    <li>
                                                        Duis dictum auctor augue
                                            </li>
                                                    <li>
                                                        Suspendisse sit amet velit in dui.
                                            </li>
                                                    <li>
                                                        Phasellus a metus nec augue justo.
                                            </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 nopadding">
                                                <ul className="list">
                                                    <li>
                                                        Duis dictum auctor augue
                                            </li>
                                                    <li>
                                                        Suspendisse sit amet velit in dui.
                                            </li>
                                                    <li>
                                                        Phasellus a metus nec augue justo.
                                            </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btnn">
                                        <button className="nut">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style1;