import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Page_Content_Panner from "./home/Page_Content_Panner";
import Page_Img from "./home/Page_Img";
import About_Company from "./home/About_Company";
import Page_Content_One from "./home/Page_Content_One";
import Page_Content_Two from "./home/Page_Content_Two";
import Page_Content_Three from "./home/Page_Content_Three";
import Page_Content_Four from "./home/Page_Content_Four";
import Page_Content_Six from "./home/Page_Content_Six";
import Page_Content_Seven from "./home/Page_Content_Seven";
import Page_Content_Eight from "./home/Page_Content_Eight";
import Porfolio from "./home/Porfolio";
import Addon from "./home/Addon";
import "./home/Home.scss";
import Menu from './Menu';

//Swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


class Home extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div className="wp-home">
        <Menu />
        <Carousel>
          <Carousel.Item>
            <div className="page-content-panner">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Page_Content_Panner />
                  </div>
                  <div className="col-md-6">
                    <Page_Img />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="page-content-panner">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Page_Content_Panner />
                  </div>
                  <div className="col-md-6">
                    <Page_Img />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="page-content-panner">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Page_Content_Panner />
                  </div>
                  <div className="col-md-6">
                    <Page_Img />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="page-content-panner">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Page_Content_Panner />
                  </div>
                  <div className="col-md-6">
                    <Page_Img />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="page-content-panner">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Page_Content_Panner />
                  </div>
                  <div className="col-md-6">
                    <Page_Img />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="content-eight">
          <div className="container">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                loop = {true}
                autoplay = {true}
              >
                <SwiperSlide><Page_Content_Eight icon="fa fa-address-book-o" title="Fully Responsive"/></SwiperSlide>
                <SwiperSlide><Page_Content_Eight icon="fa fa-link" title="Classic Styles" /></SwiperSlide>
                <SwiperSlide><Page_Content_Eight icon="fa fa-bolt" title="Secure Services" /></SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="about-company">
          <About_Company />
        </div>

        <div className="page-content">
          <Page_Content_One />
        </div>

        <div className="addon-feature">
          <div className="container">
            <div className="row wp-row">
              <Addon img="images/8.jpg" title="Wireframes" />
              <Addon img="images/9.jpg" title="Design Mockup" />
              <Addon img="images/10.jpg" title="Development" />
            </div>
          </div>
        </div>

        <div className="content_two">
          <div className="container">
            <div className="row">
              <Page_Content_Two
                img="images/197.jpg"
                sub="About Company"
                main="Creative Digital Agency"
              />
              <Page_Content_Two
                img="images/198.jpg"
                sub="We Design Quality"
                main="Multipurpose Design"
              />
              <Page_Content_Two
                img="images/199.jpg"
                sub="Our Journey"
                main="Know About Success"
              />
            </div>
          </div>
        </div>

        <div className="porfolio">
          <Porfolio />
        </div>
        

        <div className="content_three">
          <div className="container">
            <Page_Content_Three />
          </div>
        </div>

        <Page_Content_Four />


       <div className="content_six">
          <Page_Content_Six />
        </div>

        <div className="content_seven">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  loop = {true}
                  autoplay 
                >
                  <SwiperSlide><Page_Content_Seven /></SwiperSlide>
                </Swiper>
            </div>
          </div>
        </div>
        </div>
    </div>
    );
  }
}

export default Home;
