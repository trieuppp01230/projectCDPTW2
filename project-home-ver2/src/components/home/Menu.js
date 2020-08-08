import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component { 
    constructor() {
        super();
        this.state = {
            scrolled: false,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll' , () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true ) {
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled :false });
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <div className={this.state.scrolled ? 'menu scrolled' : 'menu'} >
                <div className="container">
                <nav className="navbar navbar-expand-sm padding">
                    <a className="navbar-brand"><img className="logo" src="images/logo.png" alt=""/></a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 left">
                        <li className="nav-item active">
                            <Link to='/'>
                            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </Link>
                            <ul className="mega-menu padding clearfix">
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Home Page 1</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 1</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 2</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 3</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Home Page 2</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 4</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 5</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 6</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Home Page 3</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 7</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 8</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 9</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Home Page 4</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 10</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 11</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child">Home Page 12</a></li>
                                </ul>
                              </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Pages</a>
                                <ul className="sub-menu clearfix padding">
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">About<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <li className="list-child">
                                                <a className="child">About style 1</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">About style 2</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">About style 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Services<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <li className="list-child">
                                                <a className="child">Services style 1</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Services style 2</a>
                                            </li>
                                          </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Team<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <li className="list-child">
                                                <a className="child">Team Classic</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Team Parallax</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Team Creative</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">FAQ<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <li className="list-child">
                                                <a className="child">FAQ Style 1</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">FAQ Style 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Contact<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <li className="list-child">
                                                <a className="child">Contact Classic</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Full Width Map</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                          </li>
                          <li className="nav-item">
                            <Link to='/shop'>
                            <a className="nav-link">Feature</a>
                            </Link>
                                <ul className="sub-menu clearfix padding">
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Headers<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <li className="list-child">
                                                <a className="child">Header Light</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Header Dark</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Header Modern</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Header Left Logo</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Header White</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Menu Styles<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <li className="list-child">
                                                <a className="child">Menu Transparent</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Menu Left Logo</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Menu Light</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Menu Dark</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Menu Boxed</a>
                                            </li>
                                        </ul>   
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Footer Styles<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Videos<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Wide & Boxed<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">PSD Files<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Porfolio</a>
                            <ul className="mega-menu padding clearfix">
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Porfolio Columns 1</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Two Columns</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Three Columns</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Four Columns</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Porfolio Columns 2</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Masonry</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Masonry Project</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Mosaic</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><span className="mega-menu-list-name">Porfolio Columns 3</span>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Full Width</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Classic</a></li>
                                  
                                    <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>No Space</span></li>
                                  
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Porfolio Columns 4</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Single Project</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Shortcodes</a>
                            <ul className="mega-menu padding clearfix">
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Shortcodes 1</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-plus-circle" aria-hidden="true"></i>Accodion</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-exclamation" aria-hidden="true"></i>Alerts</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-bars" aria-hidden="true"></i>Amination</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Shortcodes 2</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-external-link" aria-hidden="true"></i>Buttons</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-table" aria-hidden="true"></i>Data Tables</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-th-list" aria-hidden="true"></i>Grids</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Shortcodes 3</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-th-large" aria-hidden="true"></i>Icon Boxes</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-circle-o" aria-hidden="true"></i>Icon Circles</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-list" aria-hidden="true"></i>Icon Lists</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Shortcodes 4</a>
                                <ul className="mega-menu-list-child padding">
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-align-center" aria-hidden="true"></i>Tabs</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-list-ul" aria-hidden="true"></i>Lists</a></li>
                                  <li className="mega-child-list"><a href="" className="mega-child"><i className="fa fa-square-o" aria-hidden="true"></i>Sections</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Blog</a>
                                <ul className="sub-menu clearfix padding">
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Classic<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <li className="list-child">
                                                <a className="child">Full Width</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Left Sidebar</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Right Sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Grids<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <li className="list-child">
                                                <a className="child">One Column</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Two Column</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Three Column</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Four Column</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Default<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <li className="list-child">
                                                <a className="child">Full Width</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Left Sidebar</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Right Sidebar</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Author Page</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Blog Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Thumbnail<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <li className="list-child">
                                                <a className="child">Full Width</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Left Sidebar</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Right Sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Shop</a>
                                <ul className="sub-menu clearfix padding">
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Grids<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <li className="list-child">
                                                <a className="child">One Column</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Two Column</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Three Column</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Four Column</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Default<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <li className="list-child">
                                                <a className="child">Full Width</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Left Sidebar</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Right Sidebar</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Author Page</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Blog Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Order Process<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <li className="list-child">
                                                <a className="child">Shopping Card</a>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Checkout</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Single Product</a></li>
                                </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link"><i className="fa fa-search" aria-hidden="true"></i></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                          </li>
                      </ul>
                    </div>
                  </nav>
                </div>
            </div>
        );
    }
}

export default Menu;