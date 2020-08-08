import React, { Component } from "react";
import Sp_People from "./Sp_People";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./TeamParallax.scss";
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Sp_parallax extends Component {

  render() {
    return (
      <div className="Sp_Parallax">
        <div className="container">
          <Swiper
            spaceBetween={25}
            navigation
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            autoplay
          >
            <SwiperSlide><Sp_People img="images/imgParallax/20.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
            <SwiperSlide><Sp_People img="images/imgParallax/21.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
            <SwiperSlide><Sp_People img="images/imgParallax/22.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
            <SwiperSlide><Sp_People img="images/imgParallax/20.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
            <SwiperSlide><Sp_People img="images/imgParallax/21.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
            <SwiperSlide><Sp_People img="images/imgParallax/22.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
            <SwiperSlide><Sp_People img="images/imgParallax/20.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
            <SwiperSlide><Sp_People img="images/imgParallax/21.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
            <SwiperSlide><Sp_People img="images/imgParallax/22.png" tittle="Matthew" sub="Founder &amp; CEO" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Sp_parallax;
