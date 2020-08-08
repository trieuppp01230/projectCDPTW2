import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

class Page_Content_Eight extends Component {
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

export default Page_Content_Eight;