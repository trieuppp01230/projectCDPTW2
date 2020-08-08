import React, { Component } from 'react';
import Panner from '../search/Panner';
import Menu from '../Menu';
import '../contact/Content_Classic.scss';
import "./Blog.scss";
import Form from 'react-bootstrap/Form'
class AuThor_Page extends Component {
    render() {
        return (
            <div className="author-page">
                <Menu />
                <div className="panner">
                    <Panner main="BLOG AUTHOR PAGE" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form">
                                <label className="invalid">Username *</label>
                                <input className="input"/>
                                <label className="invalid">Password *</label>
                                <input className="input"/>
                                <Form.Check aria-label="option 1" /><span>Remember me</span>
                                <button className="login">Log in</button>
                                <span className="forgot">Forgot your password?</span>
                                <span className="forgot">Forgot your username?</span>
                            </div>
                            
                          
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuThor_Page;