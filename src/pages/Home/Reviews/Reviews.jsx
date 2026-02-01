import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import customer_top from "../../../assets/customer-top.png";
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div className="py-10">
      <section className="text-center py-10">
        <div className="flex justify-center w-full">
          <img src={customer_top} alt="" className="max-w-xs md:max-w-sm" />
        </div>

        <div className="mt-6">
          <h1 className="text-xl md:text-2xl font-semibold text-secondary">
            What our customers are saying
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </section>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          scale: 0.75,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
