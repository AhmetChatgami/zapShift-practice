import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
const Banner = () => {
  return (
    <div className="flex">
      <Carousel autoplay={true} infiniteLoop={true}>
        <div className="relative w-fit">
          <img src={banner1} />
          <button className="absolute bottom-15 left-20 bg-primary text-black font-semibold px-4 py-2 rounded-full shadow-lg">
            Track Your Parcel
          </button>
          <button className="absolute bottom-15 outline-1 text-black font-semibold px-4 py-2">
            Be A Rider
          </button>
        </div>
        <div>
          <img src={banner2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={banner3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
