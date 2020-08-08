import React, { Component } from 'react';
import "./Md2_Home.scss";
import Box_Sp_Md2 from "./Box_Sp_Md2";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


class Md2_Home extends Component {
    render() {
        return (
            <div className="md2-home">
            <div className="container">
              <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  navigation
                  loop = {true}
                  autoplay = {true}
                >
                  <SwiperSlide><Box_Sp_Md2 icon="fa fa-address-book-o" title="Fully Responsive"/></SwiperSlide>
                  <SwiperSlide><Box_Sp_Md2 icon="fa fa-link" title="Classic Styles" /></SwiperSlide>
                  <SwiperSlide><Box_Sp_Md2 icon="fa fa-bolt" title="Secure Services" /></SwiperSlide>
              </Swiper>
            </div>
          </div>
        );
    }
}

export default Md2_Home;