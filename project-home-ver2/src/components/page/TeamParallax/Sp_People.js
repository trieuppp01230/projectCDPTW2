import React, { Component } from 'react';
import "./TeamParallax.scss";

class Swiper_People extends Component {
render() {
return (

    <div className="people-item">
        <div className="img-box">
            <img className="img-people" src={this.props.img} alt="img-reponsive" />
            <div className="overlay-parallax">
                <h4 className="h4-title">{this.props.title}</h4>
                <p className="sub-text">{this.props.sub}</p>
                <p className="content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                <br />
                <ul className="icon-pp">
                    <li>
                        <a className="a a1" href="">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="a a2" href="">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="a a3" href="">
                            <i className="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="a a4" href="">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>

);
}
}

export default Swiper_People;