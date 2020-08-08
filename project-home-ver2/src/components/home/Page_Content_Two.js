import React, { Component } from 'react';

class Page_Content_Two extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="col-inner">
                    <img src={this.props.img} />
                    <div className="col-addon">
                        <h5 className="sub-title">{this.props.sub}</h5>
                        <h2 className="main-title">{this.props.main}</h2>
                        <button className="btn btn-readmore"><i className="fa fa-play-circle" aria-hidden="true"></i>Read more</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page_Content_Two;