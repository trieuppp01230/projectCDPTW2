import React, { Component } from 'react';

class Box_Sp_Md2 extends Component {
    render() {
        return (
            <div className="box-wrapper clearfix">
            <div className="box-item">
              <div className="icon"><i className={this.props.icon} aria-hidden="true" /></div>
              <div className="desc">
                <h5 className="title">{this.props.title}</h5>
                <p className="content">Vestibulum ante ipsum primis sit amet justo elit faucibus orci luctus ultrices posuere cubilia Curae.</p>
                <a className="readmore">Read more<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        );
    }
}

export default Box_Sp_Md2;