import React, { Component } from 'react';
import './Style10.scss';

class Style9 extends Component {
    render() {
        return (
            <div className="box-center clearfix">
            <div className="text-center">
                <div className="box-text">
                    <div className="box-text-icon">
                        <span>
                            <i className={this.props.icon}></i>
                        </span>
                    
                    </div>
                    <br />
                    <h5 className="box-text-title font-weight-5">{this.props.title}</h5>
                    
                    <p className="box-text-conter">
                    Praesent mattis sit commodo augue Aliquam ornare hendrerit augue Cras tellus In pulvinar.         
                    </p>
                </div>
                <div className="box-btn ">
                    <span >Read more &nbsp; 
                    <i className="fa fa-long-arrow-right text-primary" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        );
    }
}

export default Style9;