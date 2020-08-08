import React, { Component } from 'react';
import "./About_Style_4.scss";

class About_Style_4 extends Component {
    render() {
        return (
            <div className="about_Style_4 section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-ms-6">
                            <div className="column">
                                <div className="clearfix">
                                    <div className="content">
                                        <div className="img-box">
                                            <div className="img-text">
                                                <h1 className="title font-weight-7">About Our Journey</h1>
                                                <a className="link" hre="#">
                                                    <span >Read more &nbsp; 
                                                        <i class="fa fa-angle-right " aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                            </div>
                                            <img src="/images/img-about-style1/AboutStyle_40.jpg" class="img img-fluid" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-ms-6">
                            <div className="column">
                                <div className="clearfix">
                                    <div className="content">
                                        <div className="img-box">
                                            <div className="img-text">
                                                <h1 className="title font-weight-7">About Our Success</h1>
                                                <a className="link" hre="#">
                                                    <span >Read more &nbsp; 
                                                        <i class="fa fa-angle-right " aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                            </div>
                                            <img src="/images/img-about-style1/AboutStyle_41.jpg" class="img img-fluid" alt=""/>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="sppb-addon text-center ">
                            <h2 className="sppb-addon-title">About Our Goals</h2>
                            <div className="sppb-addon-center">
                                <div className="ce-title-line">&nbsp;</div>
                                <br/>
                                <h5 >Nullam tellus diam volutpat laoreet</h5>
                                <br />
                                <p className="texts">mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus Curabitur.</p>
                                
                            </div>
                            <div className="kc clearfix"></div>
                            <p className="btn btn-dark btn-medium btn-round uppercase"> <i class="fa fa-play-circle">&nbsp;</i> Order Now!</p>
                            
                        </div>  
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default About_Style_4;