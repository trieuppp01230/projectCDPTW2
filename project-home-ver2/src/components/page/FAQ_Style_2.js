import React, { Component } from 'react';
import Panner from "../search/Panner";
import Side_Bar from "../shop/Side_Bar";
import "../shopping_card/Shopping_Card.scss";
import Menu from "../Menu";
import './FAQ_Style_2.scss'
class FAQ_Style_2 extends Component {
    render() {
        return (
            <div className="faq">
                <Menu />
                <div className="panner_v2">
                    <Panner main="FAQ STYLE 2" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="box-banner">
                                <div className="collumn-addon">
                                    <h3 className="title">faq </h3>
                                    <h3 className="title-one">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Curabitur eget orci. Cras laoreet ligula. Etiam sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam tellus diam, volutpat a, laoreet vel, bibendum in, nibh. Donec elit lectus, pharetra quis, vulputate in
</p>
                                </div>
                                <div className="collumn-addon">
                                    <h3 className="title-one">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Curabitur eget orci. Cras laoreet ligula. Etiam sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam tellus diam, volutpat a, laoreet vel, bibendum in, nibh. Donec elit lectus, pharetra quis, vulputate in
</p>
                                </div>
                                <div className="collumn-addon">
                                    <h3 className="title-one">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Curabitur eget orci. Cras laoreet ligula. Etiam sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam tellus diam, volutpat a, laoreet vel, bibendum in, nibh. Donec elit lectus, pharetra quis, vulputate in
</p>
                                </div>
                                <div className="collumn-addon">
                                    <h3 className="title-one">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Curabitur eget orci. Cras laoreet ligula. Etiam sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam tellus diam, volutpat a, laoreet vel, bibendum in, nibh. Donec elit lectus, pharetra quis, vulputate in
</p>
                                </div>
                                <div className="collumn-addon">
                                    <h3 className="title-one">Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Curabitur eget orci. Cras laoreet ligula. Etiam sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam tellus diam, volutpat a, laoreet vel, bibendum in, nibh. Donec elit lectus, pharetra quis, vulputate in
</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Side_Bar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ_Style_2;