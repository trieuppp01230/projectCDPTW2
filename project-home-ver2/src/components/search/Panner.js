import React, { Component } from 'react';

class Panner extends Component {
    render() {
        return (
            <div className="container">
                <div className="heading">
                    <h2 className="main-heading">{this.props.main}</h2>
                    <h3 className="sub-heading">{this.props.sub}</h3>
                </div>
            </div>
            
        );
    }
}

export default Panner;