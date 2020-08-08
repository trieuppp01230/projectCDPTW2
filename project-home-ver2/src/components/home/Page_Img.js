import React, { Component } from 'react';

class Page_Img extends Component {
    render() {
        return (
            <div className="box-img clearfix">
                <div className="box-iphone">
                    <img src="images/iphone.png" alt="" className="iphone"/>
                    <img src="images/img-iphone.jpg" alt="" className="img-iphone"/>
                </div>
                <div className="box-ipad">
                    <img src="images/ipad.png" alt="" className="ipad"/>
                    <img src="images/img-ipad.jpg" alt="" className="img-ipad"/>
                </div>
            </div>
        );
    }
}

export default Page_Img;