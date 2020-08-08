import React, { Component } from 'react';

class Feauter_Product extends Component {
    render() {
        return (
            <div className="box-feauter">
                <div className="img-box">
                    <img src={this.props.img} alt=""/>
                    <figcaption className="overlay">
                        <div className="box">
                            <div className="content">
                                <i className="fa fa-link" aria-hidden="true"></i>
                            </div>
                        </div>
                    </figcaption>
                </div>
                <div className="content-box">
                    <h4 className="product-title">{this.props.title}</h4>
                    <div className="product-desc"><p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="sale-price">$25.00</div>
                    <button className="view-detail">View Details</button>
                </div>
            </div>
        );
    }
}

export default Feauter_Product;