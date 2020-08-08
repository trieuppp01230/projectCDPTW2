import React, { Component } from 'react';
import Box_Gutter from './Box_Gutter';
class Shop_Gutter extends Component {
    render() {
        return (
            <div className="container">
                <div className="row shop-gutter">
                    <div className="col-md-6 col-inner">
                        <div className="col-img">
                            <img src="images/sp-30.jpg" alt=""/>
                            <Box_Gutter title="women's" />
                        </div>
                    </div>
                    <div className="col-md-3 col-inner">
                        <div className="col-img">
                            <img src="images/sp-31.jpg" alt=""/>
                            <Box_Gutter title="men's" />
                        </div>
                    </div>
                    <div className="col-md-3 col-inner">
                        <div className="col-img">
                            <img src="images/sp-32.jpg" alt=""/>
                            <Box_Gutter title="fashion" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop_Gutter;