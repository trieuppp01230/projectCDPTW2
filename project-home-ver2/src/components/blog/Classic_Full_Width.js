import React, { Component } from 'react';
import Panner from "../search/Panner";
import "../shopping_card/Shopping_Card.scss";
import Menu from "../Menu";
import './Blog.scss';
class Classic_Full_Width extends Component {
    render() {
        return (
            <div className="classic-full-width">
                <Menu />
                <div className="panner">
                    <Panner main="CLASSIC FULL WIDTH" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="full-width">
                    <div className="container">
                    <div className="row">
                            <div className="image">
                                <img src="images/24.jpg" alt=""/>
                            </div>
                            <div className="desc">
                                <h1 className="main-title">Maecenas nisl lectus imperdiet</h1>
                                <div className="article-info">
                                    <span className="createdby"><i className="fa fa-user"></i> Windstripe</span>
                                    <span className="createdby"><i className="fa fa-folder"></i> Blak</span>
                                    <span className="createdby"><i className="fa fa-thumbs-up"></i> Hits: 149</span>
                                </div>
                                <div className="articleBody">
                                    <p>Lorem ipsum dolor sit amet sit justo et consectetuer dolor adipiscing sit amet justo.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet ligula. Etiam sit amet dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Nullam tellus diam volutpat laoreet vel bibendum in nibh Donec elit lectus pharetra quis vulputate in lobortis at mi Donec libero.</p>
                                    <p>How all this mistakens idea off denouncing sed pleasur and praising our pain was born and get will give you complete occur in which toil and pain can procure him some great pleasure take a trivial example, which of us ever undertakes laborious physical exercise obtain some give you complete advantages from it account of the system explain to you how all this mistaken idea of denouncing pleasure and praising pain was complete account.</p>
                                    <p>Great pleasure take a trivial example, which of us ever undertake laborous sed physical exercise obtain some give you complete advantages from sed it accont of the system explain to you how all this mistaken idea of denouncing pleasure and praising was complete account.</p>
                                    <blockquote>
                                    <p>Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    </blockquote>
                                    <p>Which is everything that nourishes your life perspiciatis unde seds omnis iste natus error us sed sit voluptatem accusantium dolore mqueds laudantium, totam uts aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto teachings of the great explorer.</p>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Classic_Full_Width;