import React, { Component } from "react";
import "./Nav_Header_Modern.scss";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default class Nav_HeaderModern extends Component {
  render() {
    return (
      <div className="Sp_HeaderModern">
        <Swiper navigation slidesPerView={1} loop={true} autoplay>
          <SwiperSlide>
            <div className="container-fluid bg-headermodern-src1">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-bg-headermodern-title text-center">
                      <p className="p-title-content-headermodern">
                        Beautifully Crafted Layouts
                      </p>
                      <p className="p-title-headermodern-nav">
                        Excellent Design <br /> Styles and Concepts
                      </p>
                      <p className="button-title-headermodern">
                        Get Started now!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-fluid bg-headermodern-src2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-bg-headermodern-title text-center">
                      <p className="p-title-content-headermodern">
                        Awesome Shop Pages and more
                      </p>
                      <p className="p-title-headermodern-nav">
                        Get Unlimited Shop <br /> Design Sections
                      </p>
                      <p className="button-title-headermodern">
                        Get Started now!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
