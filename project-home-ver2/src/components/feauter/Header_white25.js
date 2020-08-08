import React from 'react';
import "./Header25.scss";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Header_white25() {
    return (
        <div className="container header_white25">
            <div className="row">
                <div className="col-6 success">
                    <img className="img-responsive" src={'images/header-white/headerwhite_1.png'} width="550" height="450" />
                </div>
                <div className="col-md-6 warning" width="540">
                    <Swiper       

                        spaceBetween={20}
                        slidesPerView={1}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
                        autoplay
                       
                    >
                        <SwiperSlide>
                            <div className="col-millipede">
                                <div className="ant">
                                    <h2 className="flea"> Our Journey and Business milestones  </h2><br />
                                </div>
                                <div className="louse">
                                    <h6 className="cricket ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Suspendisse et justo. Praesent mattis elite justo .</h6><br />
                                    <p>Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In
                                    pulvinar lectus a est Curabitur eget orci Cras laoreet ligula. Etiam sit amet
                                        dolor. Vestibulum ante ipsum primis in faucibus.</p>
                                    <p>Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In
                                    pulvinar lectus a est Curabitur eget orci Cras laoreet ligula. Etiam sit amet
                                        dolor. Vestibulum ante ipsum primis.</p>
                                </div>
                                <div className="wasp">
                                    <a className="btn-locust"><i className="fa fa-play-circle" aria-hidden="true"></i> Read
                                        more</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-millipede" data-swiper-autoplay="2000">
                                <div className="ant">
                                    <h2 className="flea">We are Creative Business Agency for Startups</h2><br />
                                </div>
                                <div className="louse">
                                    <h6 className="cricket ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Suspendisse et justo. Praesent mattis elite justo .</h6><br />
                                    <p>Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In
                                    pulvinar lectus a est Curabitur eget orci Cras laoreet ligula. Etiam sit amet
                                        dolor. Vestibulum ante ipsum primis in faucibus.</p>
                                    <p>Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In
                                    pulvinar lectus a est Curabitur eget orci Cras laoreet ligula. Etiam sit amet
                                        dolor. Vestibulum ante ipsum primis.</p>
                                </div>
                                <div className="wasp">
                                    <a className="btn-locust" ><i className="fa fa-play-circle" aria-hidden="true"></i> Read
                                        more</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Header_white25