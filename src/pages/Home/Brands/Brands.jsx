import React from "react";
import "swiper/css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import amazon from '../../../assets/brands/amazon.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from "swiper/modules";
import live_tracking from '../../../assets/live-tracking.png'

const brandLogos=[amazon, casio, moonstar, randstad, star, start_people]
const Brands = () => {
  return (
    <div className="my-15 border-b-2 border-dashed pb-10">
        <h1 className="text-center font-bold text-2xl pb-8 text-secondary">We've helped thousands of sales teams</h1>
        <Swiper className="mb-15"
      spaceBetween={60}
      slidesPerView={4}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
        {
            brandLogos.map((logo, index)=><SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide> )
        }
      
     
    </Swiper>

    </div>
  );
};

export default Brands;
