import React, { Component } from 'react';

class Hv_Creative extends Component {
render() {
return (
<div className="creative-share">
    <div className="img-box-creative">
        <img className="img-creative" src={this.props.img} alt="img-responsive" />

        <div className="overlay-creative">
        <p>Praesent mattis commodo augue Aliquam ornare hendrerit . </p>
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
    
    <div className="skarner-1">
        <img src="images/imgParallax/136.png" alt="img-responsive" />
    </div>
    <div className="skarner-2">
        <img src="images/imgParallax/137.png" alt="img-responsive" />
    </div>
    <div className="skarner-3">
        <img src="images/imgParallax/139.png" alt="img-responsive" />
    </div>
    <div className="text-box-cr">
        <h5 className="h5-title-cr">{this.props.titlecr}</h5>
        <p className="subtext-cr">{this.props.subcr}</p>
    </div>
</div>
);
}
}

export default Hv_Creative;