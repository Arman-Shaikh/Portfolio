import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.jpg";
import Ecommerce from "../../img/ecommerce.jpg";
import HOC from "../../img/hoc.jpg";
import MusicApp from "../../img/musicapp.jpg";
import JobSearch from "../../img/jobsearch.jpg";
import Broker from "../../img/broker.jpg";
import Ecommerce1 from "../../img/ecommerce1.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JobSearch} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Broker} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
