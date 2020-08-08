import React, { Component } from 'react';
import "./Style4.scss";

class Style4 extends Component {
    render() {
        return (
            <div className="style4">
            <div className="container">
                <div className="row">
                    <div className = "cot">
                        <div className="col-md-6">
                            <img className ="imgs" src='/images/img-about-style1/image4.jpg' />
                        </div>
                        <div className="col-md-6">
                            <div className="sppb-addon">
                                <h5 className="sppb-addon-title">
                                What we offer for your business
                                </h5>
                                <div className="sppb-addon-content">
                                    <h2 className="nd">
                                    We Create awesome designs <br/>  for your Business
                                    </h2>
                                    <div className="ce-title-line align-left"></div>
                                </div>
                                <div className="sppb-addon-text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo .<br/> Praesent mattis commodo augue. Aliquam ornare hendrerit augue. Cras tellus. In <br/> pulvinar lectus a est. Curabitur eget orci. Cras laoreet ligula. Etiam sit amet dolor.<br/> Vestibulum ante ipsum primis in faucibus orci luctus Lorem ipsum dolor sit amet, <br/> consectetuer adipiscing elit. Suspendisse et justo.
                                </div>
                                <div className="btn">
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

export default Style4;