import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

//"user_email": "nina.khan@example.com",
    // "userName": "Nina Khan",
    // "delivery_email": "delivery6@example.com",
    // "ratings": 4.9,
    // "review": "Superb experience! Highly recommended.",
    // "parcel_id": "5f47ac10b4f1c03e8c109876",
    // "pick_up_email": "pickup6@example.com",
    // "user_photoURL": "https://randomuser.me/api/portraits/women/8.jpg",
    // "date": "2024-08-10T12:00:00.000Z"
const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="card w-full max-w-md bg-base-100 border border-gray-100 rounded-[2rem] p-8">
      
      <div className="text-cyan-200 text-5xl mb-4">
        <FaQuoteLeft />
      </div>

      {/* রিভিউ টেক্সট */}
      <div className="card-body p-0">
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {testimonial}
        </p>

      
        <div className="border-t-2 border-dotted border-slate-800 w-full mb-6"></div>

        {/* ইউজার ইনফো (নিচের অংশ) */}
        <div className="flex items-center gap-4">
          {/* প্রোফাইল ইমেজ/সার্কেল */}
          <div className="w-16 h-16 bg-[#004757] rounded-full"><img src={user_photoURL} alt="" /></div>

          <div>
            <h3 className="text-[#004757] text-xl font-bold">{userName}</h3>
            <p className="text-gray-500 font-medium">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
