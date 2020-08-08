import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

class Page_Content_Nine extends Component {
    render() {
        return (
                <div className="container">
                    <div className="partner">
                        <Swiper
                            slidesPerView={5}
                            >
                            <SwiperSlide><img src="images/1.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/2.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/3.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/4.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/5.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/1.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/2.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/3.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/4.png"/></SwiperSlide>
                            <SwiperSlide><img src="images/5.png"/></SwiperSlide>
                            </Swiper>
                    </div>
                </div>
        );
    }
}

export default Page_Content_Nine;