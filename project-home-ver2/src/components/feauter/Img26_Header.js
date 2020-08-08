import React from 'react';
import "./Header26.scss";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


function Img26_Header() {
return (
<div className="bat-content">
    <div class="chimpanze">
        <div class="badger">
            <h5 class="bear">What our people and clients says</h5>
        </div>
        <div class="beaver">
            <h2 class="camel">Our Customers and people Says<br />
                we deliver quality products</h2>
        </div>
        <div class="deer">&nbsp;</div>
    </div>
    <div class="dolphin">
        <Swiper spaceBetween={20} slidesPerView={1} onSwiper={(swiper)=> console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            autoplay
            >
            <SwiperSlide>
                <div className="col-mammoth">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="giraffe">
                                    <div className="fox-text">
                                        <p>
                                            Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In
                                            pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam sit amet
                                            dolor Vestibulum ante.
                                        </p>
                                    </div>
                                    <div className="guinea">
                                        <img src="/images/header-white/74.jpg" alt="" class="img-responsive"/>
                                    </div>
                                    <div className="hedgehog">
                                        <h6 className="less-mar-1">Benjamin</h6>
                                        <p>CEO - maxtech</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="giraffe">
                                    <div className="fox-text">
                                        <p>
                                            Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In
                                            pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam sit amet
                                            dolor Vestibulum ante.
                                        </p>
                                    </div>
                                    <div className="guinea">
                                        <img src="/images/header-white/75.jpg" alt="" class="img-responsive"/>
                                    </div>
                                    <div className="hedgehog">
                                        <h6 className="less-mar-1">Margaret</h6>
                                        <p>Designer - maxtech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="col-mammoth">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="giraffe">
                                    <div className="fox-text">
                                        <p>
                                            Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In
                                            pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam sit amet
                                            dolor Vestibulum ante.
                                        </p>
                                    </div>
                                    <div className="guinea">
                                        <img src="/images/header-white/74.jpg" alt="" class="img-responsive"/>
                                    </div>
                                    <div className="hedgehog">
                                        <h6 className="less-mar-1">Benjamin</h6>
                                        <p>CEO - maxtech</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="giraffe">
                                    <div className="fox-text">
                                        <p>
                                            Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In
                                            pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam sit amet
                                            dolor Vestibulum ante.
                                        </p>
                                    </div>
                                    <div className="guinea">
                                        <img src="/images/header-white/75.jpg" alt="" class="img-responsive"/>
                                    </div>
                                    <div className="hedgehog">
                                        <h6 className="less-mar-1">Margaret</h6>
                                        <p>Designer - maxtech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</div>
)
}

export default Img26_Header