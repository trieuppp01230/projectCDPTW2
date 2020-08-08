import React, { Component } from 'react';
import Top_Menu from './shop/Top_Menu';
import Panner_Default from './shop/Panner_Default';
import Shop_Gutter from './shop/Shop_Gutter';
import Feauter_Product from './shop/Feauter_Product';
import Panner_Shoe from './shop/Panner_Shoe';
import Menu from './Menu';
import './shop/Shop.scss';

class Shop_FullWidth extends Component {
    render() {
        return (
            <div className="shop-full-width">
                <Top_Menu />
                <Menu/>
                <div className="panner-default">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7"></div>
                            <div className="col-md-5">
                                <Panner_Default />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wp-shop-gutter">
                    <Shop_Gutter />
                </div>
                <div className="feauter-product">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-3">
                            <Feauter_Product img="images/sp-4.jpg" title="Designer top"/>
                        </div>
                        <div className="col-md-3">
                            <Feauter_Product img="images/sp-5.jpg" title="Jean & Teashirt"/>
                        </div>
                        <div className="col-md-3">
                            <Feauter_Product img="images/sp-6.jpg" title="Beautiful Green Dress"/>
                        </div>
                        <div className="col-md-3">
                            <Feauter_Product img="images/sp-7.jpg" title="Casual dress"/>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="panner-shoe">
                    <Panner_Shoe />
                </div>

                <div className="feauter-product">
                    <div className="container">
                        <h3 className="feauter-title">Featured Products</h3>
                        <div className="row">
                            <div className="col-md-3">
                                <Feauter_Product img="images/sp-4.jpg" title="Designer top"/>
                            </div>
                            <div className="col-md-3">
                                <Feauter_Product img="images/sp-5.jpg" title="Jean & Teashirt"/>
                            </div>
                            <div className="col-md-3">
                                <Feauter_Product img="images/sp-6.jpg" title="Beautiful Green Dress"/>
                            </div>
                            <div className="col-md-3">
                                <Feauter_Product img="images/sp-7.jpg" title="Casual dress"/>
                            </div>
                            <div className="col-md-3">
                                <Feauter_Product img="images/sp-9.jpg" title="Mens Suit"/>
                            </div>
                            <div className="col-md-3">
                                <Feauter_Product img="images/sp-10.jpg" title="Beautiful Green Dress"/>
                            </div>
                            <div className="col-md-3">
                                <Feauter_Product img="images/sp-11.jpg" title="Casual Shoes"/>
                            </div>
                            <div className="col-md-3">
                                <Feauter_Product img="images/sp-12.jpg" title="Mens Suit"/>
                            </div>
                        </div>
                        <h3 className="feauter-title">Sign up for Newsletter & Promotions</h3>
                        <form className="form">
                            <input type="email" className="control" placeholder="Email"/>
                            <button className="subcribe">Subcribe</button>
                       </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop_FullWidth;