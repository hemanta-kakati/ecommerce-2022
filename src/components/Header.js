import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

import "../swiper.css";
import "swiper/css/autoplay";
import heroSlide1 from "../assets/images/home-hero-1.png";
import heroSlide2 from "../assets/images/home-hero-2.png";
import heroSlide3 from "../assets/images/home-hero-3.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section id="hero">
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide style={{ background: "#D3CAC4" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 py-4">
                  <h4>20% Flat discount</h4>
                  <h2>All Kind of Electronics, Home Appliances.</h2>
                  <p>Aliquam erat volutpat. Proin enim justo.</p>
                  <Link className="btn btn-outline-dark" to="#">
                    Explore Now
                  </Link>
                </div>
                <div className="col-md-6">
                  <div className="img-wrapper">
                    <img src={heroSlide1} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: "#D3CAC4" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 py-4">
                  <h4>Get yours now</h4>
                  <h2>Smart Speakers at Low Cost</h2>
                  <p>Aliquam erat volutpat. Proin enim justo.</p>
                  <Link className="btn btn-outline-dark" to="#">
                    Explore Now
                  </Link>
                </div>
                <div className="col-md-6">
                  <div className="img-wrapper">
                    <img src={heroSlide2} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: "#D3CAC4" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 py-4">
                  <h2>Big Savings! Grab Now Before Expires</h2>
                  <p>
                    All kind of products in one place. Starts from $1. Get
                    cashbacks & offers
                  </p>
                  <Link className="btn btn-outline-dark" to="#">
                    Explore ipads & tablets
                  </Link>
                </div>
                <div className="col-md-6">
                  <div className="img-wrapper">
                    <img src={heroSlide3} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </header>
  );
};

export default Header;
