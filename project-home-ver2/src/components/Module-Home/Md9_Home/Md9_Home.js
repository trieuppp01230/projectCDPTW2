import React, { Component } from 'react';
import "./Md9_Home.scss";

class Md9_Home extends Component {
    render() {
        return (
            <div className="md9-home">
            <div className="container">
            <div className="addon-content">
                <div className="infor">
                    <h5 className="sub-title">Get Awesome Features and many more features</h5>
                    <h2 className="main-title">We are offring awesome Features and many more Beautiful Pages</h2>
                    <div className="yellow"></div>
                </div>
                <div className="box-content">
                    <div className="box">
                        <div className="icon"><i className="fa fa-wpforms" aria-hidden="true"></i></div>
                        <div className="tex">
                            <h3 className="name">Clean & Easy</h3>
                            <span className="desc">Vestibulum ante ipsum primis sit amet justo elit.</span>
                        </div>
                    </div>
                    <div className="box style">
                        <div className="icon"><i className="fa fa-wpforms" aria-hidden="true"></i></div>
                        <div className="tex">
                            <h3 className="name">Beautiful Graphics</h3>
                            <span className="desc">Vestibulum ante ipsum primis sit amet justo elit.</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-wpforms" aria-hidden="true"></i></div>
                        <div className="tex">
                            <h3 className="name">Classic Styles</h3>
                            <span className="desc">Vestibulum ante ipsum primis sit amet justo elit.</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-wpforms" aria-hidden="true"></i></div>
                        <div className="tex">
                            <h3 className="name">Useful Sections</h3>
                            <span className="desc">Vestibulum ante ipsum primis sit amet justo elit.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default Md9_Home;