import React, { Component } from 'react';
import './Box_left.js';
import Box_left from './Box_left.js';
import './Box_right.js';
import Box_right from './Box_right.js';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "./About9.scss";


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
class About9 extends Component{
    constructor(props) {
        super(props);
        }
    render() {
        return ( 
                
                <div  className="about9">
                        <div className="owl">
                            <Swiper
                            
                            spaceBetween={50}
                            slidesPerView={1}                           
                            pagination={{ clickable: true }}
                           
                            spaceBetween={50}
                            slidesPerView={1}                           
                            
                            
                            autoplay
                            >
                                <SwiperSlide> 
                                <div className="container">
                                    <div className="mg-bt">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Box_right icon="fa fa-pencil" title="Graphic design" />
                                            </div>
                                            <div className="col-md-6">
                                                <Box_left icon="fa fa-laptop" title="UI Design"/>
                                            </div>
                                        </div>
                                        <div className="padding-3"></div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            
                                            < Box_right icon="fa fa-lightbulb-o" title="Web developer"/>
                                            </div>
                                            <div className="col-md-6">
                                            <Box_left icon="fa fa-camera" title="Photographer"/>
                                            </div>    
                                        </div>
                                    </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide> 
                                <div className="container">
                                    <div className="mg-bt">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Box_right icon="fa fa-pencil" title="Graphic design" />
                                            </div>
                                            <div className="col-md-6">
                                                <Box_left icon="fa fa-laptop" title="UI Design"/>
                                            </div>
                                        </div>
                                        <div className="padding-3"></div>
                                        <div className="row">
                                            <div className="col-md-6">
                                            < Box_right icon="fa fa-lightbulb" title="Web developer"/>
                                            </div>
                                            <div className="col-md-6">
                                            <Box_left icon="fa fa-camera" title="Photographer"/>
                                            </div>    
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

export default About9;