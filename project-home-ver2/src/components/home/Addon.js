import React, { Component } from 'react';

class Addon extends Component {
    render() {
        return (
            <div className="col-md-4 col-inner">
                <div className="col-addon">
                    <img src={this.props.img} alt="" className="addon-img" />
                    <div className="addon-infor">
                        <h4 className="addon-title">{this.props.title}</h4>
                        <div className="addon-text">
                            <p className="tex">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.</p>
                            <a className="btn btn-readmore"><i className="fa fa-play-circle" aria-hidden="true"></i>Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Addon;