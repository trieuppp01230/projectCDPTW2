import React, {Component} from "react";
import './header23.scss';

class Header23 extends Component{
    render(){
        return(
            <div className="all">
                <div className="row">
                    <div className ="col-md-3">
                        <div className ="hinh">
                            <img className="img responsive "  src='/images/Header23_1.jpg' />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sppb-addon">
                            <h5 className = "sppb-addon-title">
                            Who we are
                            </h5>
                            <div className ="sppb-addon-content">
                                <h4>Success Story</h4>
                                <p>sectetuer adipiscing elit sit amet Suspendisse et justo Praesent mattis commodo augue Aliquam ornare .</p>
                            </div>
                            <a className="sppb-btn">
                                <i className="fa fa-play-circle">
                                </i>
                                READ MORE
                            </a>
                        </div>
                    </div>
                    <div className ="col-md-3">
                        <div className ="hinh">
                            <img className="img responsive"  src='/images/Header23_2.jpg' />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sppb-addon">
                            <h5 className = "sppb-addon-title">
                            How we started
                            </h5>
                            <div className ="sppb-addon-content">
                                <h4>Our Journey</h4>
                                <p>sectetuer adipiscing elit sit amet Suspendisse et justo Praesent mattis commodo augue Aliquam ornare .</p>
                            </div>
                            <a className="sppb-btn">
                                <i className="fa fa-play-circle">
                                </i>
                                READ MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header23;