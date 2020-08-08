import React, { Component } from 'react';

class Box_right extends Component {
    render() {
        return (
            <div>
                 <div className="text-box text-box-right white">
                    <div className="icon-plan-msmall right">
                        <i className={this.props.icon} aria-hidden="true"></i>
                        
                    </div>   
                        <div className="text-boxs padding-right">
                            <h5 className="text-box-title">
                                {this.props.title}
                            </h5> 
                            <p>
                       
                            <span className="text-primary">2013</span>
                            - Infomedia
                        </p>
                        <p className="paddtop1">
                            Lorem ipsum dolor ngồi amet consectetuer adipiscing elit Sus Aliquam ornare hendrerit augue. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Box_right;
