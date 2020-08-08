import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class Foter_modern_left extends Component {
    render() {
        return (
            <div className="fot-column">
                <div className="fot-column-addon">
                    <div className="clearfix">
                        <div className="fot-contact">
                            <h5 className="title">
                                Feel Free to Contact 
                                <span>Get In Touch</span>
                            </h5>
                       
                            <div className="fot-contact-content">
                                <Form className="fot-contact-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="name" className="from-control"
                                            placeholder="Name" required="required"/>

                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" name="email" className="from-control"
                                            placeholder="Email" required="required"/>

                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="text" name="subject" className="from-control"
                                            placeholder="Subject" required="required"/>

                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea  name="message" className="from-control" rows="5" 
                                            placeholder="Message" required="required"/>

                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn">
                                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                            Submit Message
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Foter_modern_left;