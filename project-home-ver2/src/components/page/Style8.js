import React, { Component } from 'react';
import "./Style8.scss";

class Style8 extends Component {
    render() {
        return (
            <div  className="style8">
            <div className="sppd-employment text-center">
                <h5 className="emp-title">{this.props.emptitle}</h5>
                <div className="emp-content">
                    <h1 className="emp-text">{this.props.emptext}</h1>
                    <div className="ce-title-line">&nbsp;</div>
                    <h6 className="ce-sub-text">
                        Praesent mattis commodo augue Aliquam ornare 
                        hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam .
                    </h6>
                </div>
            </div>
       </div>
        );
    }
}

export default Style8;