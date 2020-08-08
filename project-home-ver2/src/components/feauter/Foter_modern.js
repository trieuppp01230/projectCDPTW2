import React, { Component } from 'react';
import "./Foter.scss";
import Foter_modem_left from "./Foter_modern_left";
class Foter_modern extends Component {
    render() {
        return (
            <div className="footer-modern section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="fot-column">
                                <div className="fot-column-addon">
                                    <div className="clearfix">
                                        <div className="fot-image">
                                            <img className="img-fluid"
                                            src="images/146.jpg" alt="Image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <Foter_modem_left/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Foter_modern;