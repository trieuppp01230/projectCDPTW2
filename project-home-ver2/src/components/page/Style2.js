import React, { Component } from 'react';
import "./Style2.scss";

class Style2 extends Component {
    render() {
        return (
            <div className="style2">
            <div className="container">
                <div className="sppb-addon sppb-addon-text-block sppb-text-center ">                 
                    <h5 className="sppb-addon-title"> Our Excellent Skills and Projects </h5>
                    <div className="sppb-addon-content">
                        <h2 className="font-weight-6 less-mar-1 line-height-5">
                            Praesent mattis commodo augue Aliquam ornare hendrerit <br/> augue Vestibulum ante ipsum primis in faucibus orci
                        </h2>
                        <div className="ce-title-line">&nbsp;</div>
                        <h6 className="ce-sub-text raleway opacity-7">Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras <br/> tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam .</h6>
                    </div>
                    <div className="BB">
                        <button className="nut">
                            <i className="fa fa-play-circle"></i>
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>    
        </div>
        );
    }
}

export default Style2;