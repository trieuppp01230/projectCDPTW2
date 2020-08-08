import React, { Component } from 'react';

class About_Company extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 box-imag">
                        <img className="imgAbout" src={'images/home-man.png'}/>
                    </div>
                    <div className="col-md-6 information">
                        <h5 className="sub-title">
                            About Company and Goals
                        </h5>
                        <h2 className="main-title">
                            We are very creative
                        </h2>
                        <div className="title-aline"></div>
                        <p className="desc">Lorem ipsum dolor sit amet consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam ornare consectetuer adipiscing hendrerit augue Cras tellus In pulvinar lectus Lorem ipsum dolor sit amet consectetuer adipiscing elit Suspendisse et justo consectetuer adipiscing Praesent mattis commodo augue Aliquam ornare consectetuer adipiscing hendrerit.</p>
                        <div className="icon-list">
                            <div className="tex"><i className="fa fa-arrow-circle-right icon-text" aria-hidden="true"></i>Pellentesque sit amet orci cursus fermentum vestibulum in dolor.</div>
                            <div className="tex"><i className="fa fa-arrow-circle-right icon-text" aria-hidden="true"></i>Maecenas fringilla orci ultrices nulla, id suscipit erat vulputate.</div>
                            <div className="tex"><i className="fa fa-arrow-circle-right icon-text" aria-hidden="true"></i>Nullam efficitur velit ut interdum pellentesque.</div>
                            <div className="tex"><i className="fa fa-arrow-circle-right icon-text" aria-hidden="true"></i>Maecenas sit amet orci eget mi commodo scelerisque eu tempus mi.</div>
                        </div>
                        <button className="btn btn-readmore"><i className="fa fa-play-circle" aria-hidden="true"></i>Read more</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default About_Company;