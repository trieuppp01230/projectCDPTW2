import React, { Component } from 'react';

class Box_Gutter extends Component {
    render() {
        return (
            <div className="box-gutter">
                <h2 className="title">{this.props.title}</h2>
                <div className="sppb-addon-text"
                    ><h2 className="sub-title">Collection</h2>
                    <h6 className="text-white">Fashion</h6>
                    <button className="shopnow">Shop Now</button>
                </div>  
            </div>
        );
    }
}

export default Box_Gutter;