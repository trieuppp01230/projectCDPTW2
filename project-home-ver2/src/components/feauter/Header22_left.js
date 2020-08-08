import React, { Component } from 'react';
import "./Header.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
class Header22_left extends Component {
       render() {
        return ( 
            
                <div  className="sppb-colum-9">
                        <div className="owl">
                            <Swiper
                            
                            spaceBetween={50}
                            slidesPerView={1}                           
                            
                            loop={true}
                            autoplay
                            >
                                <SwiperSlide> 
                                <div className="Header22L">
                                    <div className="item">
                                        <div className="img-box">
                                            <img src="/images/135.jpg" class="img-fluid" alt=""/>
                                        </div>
                                        <div className="img-text">
                                        <span>
                                            Digital Agency Studio &nbsp;  
                                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </span> 
                                        </div>
                                    </div>
                                </div>
                                 </SwiperSlide>
                                <SwiperSlide> 
                                    <div className="Header22L">
                                        <div className="item">
                                            <div className="img-box">
                                                <img src="/images/76.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div className="img-text">
                                            <span>
                                                Digital Agency Studio &nbsp;  
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                                </span> 
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>  
                        </div>                
                                    
                </div>
            
        );
    }
} 





export default Header22_left;