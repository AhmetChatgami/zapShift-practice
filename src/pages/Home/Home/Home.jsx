import React from "react";
import Banner from "../Banner/Banner";
import HowWorks from "../HowWorks/HowWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import FAQ from "../FAQ/FAQ";
import Cares from "../Cares/Cares";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="div">
        <HowWorks />
      </div>

      <OurServices />

      <Brands />
      <Cares/>
      <Reviews reviewsPromise={reviewsPromise}/>
      <FAQ/>
    </div>
  );
};

export default Home;
