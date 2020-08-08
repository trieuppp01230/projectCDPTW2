import React from 'react';
import "./59_MenuDank.scss";

function MenuDank_59() {
    return (
        <div className="container">
            <div className="menu-found">
                <h2 className="menu-title">
                    Subscribe to our Newsletter
                <div className="newsletter-content">
                        <span>Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus</span>
                    </div>
                </h2>
                <div className="newsletter-search">
                    <div className="row">
                        <div className=" newsletter-hept">
                            <form>
                                <input className="email-newsletter" type="email" placeholder="Email" name="email" />
                                <button type="submit" className="sppb-success" aria-label="Subscribe"><i className="fa" aria-hidden="true"></i> Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuDank_59