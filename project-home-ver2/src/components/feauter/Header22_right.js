import React, { Component } from 'react';
import "./Header.scss";

class Header22_right extends Component {
    render() {
        return (
            <div className="text-22">
               <div className="box-22 clearfix">
                <div className="text-box text-box-left ">
                    <div className="icon-plan-msmall left">
                        <i className={this.props.icon} aria-hidden="true"></i>
                    </div>   
                    <div className="text-boxs padding-left">
                        <h5 className="text-box-title">
                            {this.props.boxTitle}
                        </h5> 
                        <p>
                        Vestibulum ante ipsum primis sit amet justo elit faucibus orci luctus ultrices posuere .
                        </p>
                        <br/>
                        <div className="box-btn ">
                            <span >Read more &nbsp; 
                                <i class="fa fa-long-arrow-left text-primary" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>           
            </div>
            </div>
        );
    }
}

export default Header22_right;