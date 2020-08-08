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

    // componentWillUnmount() {
    //     window.removeEventListener('scroll');
    // }

    render() {
        return (
            <div className={this.state.scrolled ? 'menu scrolled' : 'menu'} >
                <div className="container">
                <nav className="navbar navbar-expand-sm padding">
                    <span className="navbar-brand">
                        <Link to='/'>
                            <div className="logo">Blak</div>
                        </Link>
                    </span>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 left">
                        <li className="nav-item active">
                            <Link to='/'>
                            <span className="nav-link">Home <span className="sr-only">(current)</span></span>
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
                            <span className="nav-link">Pages</span>
                                <ul className="sub-menu clearfix padding">
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">About<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <Link to='/about-style-1'>
                                                <li className="list-child">
                                                    <span className="child">About style 1</span>
                                                </li>
                                            </Link>
                                            <Link to='/about-style-2'>
                                                <li className="list-child">
                                                    <span className="child">About style 2</span>
                                                </li>
                                            </Link>
                                            <Link to='/about-style-3'>
                                                <li className="list-child">
                                                    <span className="child">About style 3</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Services<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <Link to='/service-style-1'>
                                                <li className="list-child">
                                                    <span className="child">Services style 1</span>
                                                </li>
                                            </Link>
                                            <Link to='/service-style-2'>
                                                <li className="list-child">
                                                    <span className="child">Services style 2</span>
                                                </li>
                                            </Link>
                                          </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Team<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <Link to='/team-classic'>
                                                <li className="list-child">
                                                    <span className="child">Team Classic</span>
                                                </li>
                                            </Link>
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
                                            <Link to='./FAQ-style-1'>
                                                <li className="list-child">
                                                    <span className="child">FAQ Style 1</span>
                                                </li>
                                            </Link>
                                            <Link to='./FAQ-style-2'>
                                                <li className="list-child">
                                                    <span className="child">FAQ Style 2</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Contact<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <Link to='/contact_classic'>
                                                <li className="list-child">
                                                    <span className="child">Contact Classic</span>
                                                </li>
                                            </Link>
                                            <Link to='/contact_full_width_map'>
                                                <li className="list-child">
                                                    <span className="child">Full Width Map</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Feature</a>
                                <ul className="sub-menu clearfix padding">
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Headers<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <Link to='/header-light'>
                                                <li className="list-child">
                                                    <span className="child">Header Light</span>
                                                </li>
                                            </Link>
                                            <Link to='/header-dark'>
                                                <li className="list-child">
                                                    <span className="child">Header Dark</span>
                                                </li>
                                            </Link>
                                            <Link to='/header-modern'>
                                                <li className="list-child">
                                                    <span className="child">Header Modern</span>
                                                </li>
                                            </Link>
                                            <Link to='/'>
                                                <li className="list-child">
                                                    <span className="child">Header Left Logo</span>
                                                </li>
                                            </Link>
                                            <li className="list-child">
                                                <a className="child">Header White</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Menu Styles<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding">
                                            <Link to='/menu-transparent'>
                                                <li className="list-child">
                                                    <span className="child">Menu Transparent</span>
                                                </li>
                                            </Link>
                                            <li className="list-child">
                                                <span className="child">Menu Left Logo</span>
                                            </li>
                                            <li className="list-child">
                                                <a className="child">Menu Light</a>
                                            </li>
                                            <Link to='/'>
                                                <li className="list-child">
                                                    <span className="child">Menu Dark</span>
                                                </li>
                                            </Link>
                                            <Link to='/'>
                                                <li className="list-child">
                                                    <span className="child">Menu Boxed</span>
                                                </li>
                                            </Link>
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
                                    <Link to='/porfo-two-column'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Two Columns</span></li>
                                    </Link>
                                    <Link to='/porfo-three-column'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Three Columns</span></li>
                                    </Link>
                                    <Link to='/porfo-four-column'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Four Columns</span></li>
                                    </Link>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Porfolio Columns 2</a>
                                <ul className="mega-menu-list-child padding">
                                    <Link to='/porfo-masonry'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Masonry</span></li>
                                    </Link>
                                    <Link to='/porfo-mosaic'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Mosaic</span></li>
                                    </Link>
                                    <Link to='/porfo-mosaic-project'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Mosaic Project</span></li>
                                    </Link>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Porfolio Columns 3</a>
                                <ul className="mega-menu-list-child padding">
                                    <Link to='/porfo-modern'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Modern</span></li>
                                    </Link>
                                    <Link to='/porfo-fullwidth'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Full Width</span></li>
                                    </Link>
                                    <Link to='/porfo-no-space'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>No Space</span></li>
                                    </Link>
                                </ul>
                              </li>
                              <li className="mega-menu-list"><a href="" className="mega-menu-list-name">Porfolio Columns 4</a>
                                <ul className="mega-menu-list-child padding">
                                    <Link to='/single-project'>
                                        <li className="mega-child-list"><span className="mega-child"><i className="fa fa-angle-right" aria-hidden="true"></i>Single Project</span></li>
                                    </Link>
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
                                            <Link to="./classic-full-width">
                                                <li className="list-child">
                                                    <span className="child">Full Width</span>
                                                </li>
                                            </Link>
                                            <Link to="./classic-left-side-bar">
                                                <li className="list-child">
                                                    <span className="child">Left Sidebar</span>
                                                </li>
                                            </Link>
                                            <Link to="./classic-right-side-bar">
                                                <li className="list-child">
                                                    <span className="child">Right Sidebar</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Grids<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <Link to='./blog-grid-one-column'>
                                                <li className="list-child">
                                                    <span className="child">One Column</span>
                                                </li>
                                            </Link>
                                            <Link to='./blog-grid-two-column'>
                                                <li className="list-child">
                                                    <span className="child">Two Column</span>
                                                </li>
                                            </Link>
                                            <Link to='./blog-grid-three-column'>
                                                <li className="list-child">
                                                    <span className="child">Three Column</span>
                                                </li>
                                            </Link>
                                            <Link to='./blog-grid-four-column'>
                                                <li className="list-child">
                                                    <span className="child">Four Column</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Default<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <Link to="/blog-default-full-width">
                                                <li className="list-child">
                                                    <span className="child">Full Width</span>
                                                </li>
                                            </Link>
                                            <Link to="./default-left-side-bar">
                                                <li className="list-child">
                                                    <span className="child">Left Sidebar</span>
                                                </li>
                                            </Link>
                                            <Link to="./default-right-side-bar">
                                                <li className="list-child">
                                                    <span className="child">Right Sidebar</span>
                                                </li>
                                            </Link>
                                            <Link to="/default-author-page">
                                                <li className="list-child">
                                                    <span className="child">Author Page</span>
                                                </li>
                                            </Link>
                                            <Link to='/default-single'>
                                                <li className="list-child">
                                                    <span className="child">Blog Single</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Thumbnail<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <Link to='/thumbnail-full-width'>
                                                <li className="list-child">
                                                    <span className="child">Full Width</span>
                                                </li>
                                            </Link>
                                            <Link to='/thumbnail-left-sidebar'>
                                                <li className="list-child">
                                                    <span className="child">Left Sidebar</span>
                                                </li>
                                            </Link>
                                            <Link to='/thumbnail-right-sidebar'>
                                                <li className="list-child">
                                                    <span className="child">Right Sidebar</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Shop</a>
                                <ul className="sub-menu clearfix padding">
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Grids<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">                                     
                                            <Link to='/gird-two-column'>
                                                <li className="list-child">
                                                    <span className="child">Two Column</span>
                                                </li>
                                            </Link>
                                            <Link to='/gird-three-column'>
                                                <li className="list-child">
                                                    <span className="child">Three Column</span>
                                                </li>
                                            </Link>
                                            <Link to='/gird-four-column'>
                                                <li className="list-child">
                                                    <span className="child">Four Column</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Default<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        <ul className="sub-menu-child padding sub-style">
                                            <Link to='/shop-default'>
                                                <li className="list-child">
                                                    <span className="child">Full Width</span>
                                                </li>
                                            </Link>
                                            <Link to='/shop-left-side-bar'>
                                                <li className="list-child">
                                                    <span className="child">Left Sidebar</span>
                                                </li>
                                            </Link>
                                            <Link to='/shop-right-side-bar'>
                                                <li className="list-child">
                                                    <span className="child">Right Sidebar</span>
                                                </li>
                                            </Link>
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
                                            <Link to='/shopping_card_shop'>
                                                <li className="list-child">
                                                    <span className="child">Shopping Card</span>
                                                </li>
                                            </Link>
                                            <Link to='/shopping_card_shop'>
                                                <li className="list-child">
                                                    <span className="child">Checkout</span>
                                                </li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-item"><a className="sub-menu-item-link">Single Product</a></li>
                                </ul>
                          </li>
                          <Link to='/search'>
                            <li className="nav-item">
                                <span className="nav-link"><i className="fa fa-search" aria-hidden="true"></i></span>
                            </li>
                          </Link>
                          <Link to='/shopping_card'>
                            <li className="nav-item">
                                <span className="nav-link"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            </li>
                          </Link>
                      </ul>
                    </div>
                  </nav>
                </div>
            </div>
        );
    }
}

export default Menu;