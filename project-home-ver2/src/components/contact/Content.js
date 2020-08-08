import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="contact-classic">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="col-inner">
                                <h3 className="title">Contact Form</h3>
                                <div className="content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                                 Aliquam ornare hendrerit consectetuer adipiscing elit. Suspendisse et justo. augue.</div>
                                <div className="form">
                                    <div className="form-inner">
                                        <input type="text" className="sppb-form-control" placeholder="Name" />
                                        <input type="text" className="sppb-form-control" placeholder="Email" />
                                        <input type="text" className="sppb-form-control" placeholder="Subject" />
                                        <textarea className="sppb-form-control" placeholder="Message" />
                                        <button className="submit">Submit Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-inner">
                                <h3 className="sppb-addon-title">Address Info
                                <span>Company name</span></h3>
                                <div className="sppb-addon-content">
                                    <p className="address">3096 Cemetery Hollow Street, Houston, TX 77099 Telephone: +1 1234-567-89000 FAX: +1 0123-4567-8900</p>
                                    <p>E-mail: mail@companyname.com</p>
                                    <p className="web">Website: www.yoursitename.com</p>
                                </div>

                                <h3 className="sppb-addon-title">Address Info</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;