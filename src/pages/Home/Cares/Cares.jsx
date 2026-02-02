import React from "react";
import live_tracking from "../../../assets/live-tracking.png";
import safe_delivery from "../../../assets/safe-delivery.png";
import MerchantBanner from "./MerchantBanner";
const Cares = () => {
  return (
    <div>
      <div className="md:py-10 border-b-2 border-dashed border-secondary">
   
        <div className="grid grid-cols-1 gap-6 pb-4 max-w-7xl mx-auto">
          {/* একটি কার্ড শুরু */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* ইমেজ সেকশন */}
            <div className="flex justify-center">
              <img
                src={live_tracking}
                alt="Tracking"
                className="w-40 md:w-full items-center object-contain"
              />
            </div>

            {/* টেক্সট সেকশন: পাশে ডটেড বর্ডার থাকবে শুধু বড় স্ক্রিনে */}
            <div className="md:border-l-2 md:border-dashed md:border-orange-400 md:p-8 space-y-2">
              <h3 className="text-xl font-bold text-[#004757]">
                Live Parcel Tracking
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </div>
          {/* একটি কার্ড শেষ */}

          {/* একইভাবে আরও কার্ড যোগ করুন... */}
        </div>
        <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto pb-8">
          {/* একটি কার্ড শুরু */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* ইমেজ সেকশন */}
            <div className="flex justify-center">
              <img
                src={safe_delivery}
                alt="Tracking"
                className="w-40 md:w-full items-center object-contain"
              />
            </div>

            {/* টেক্সট সেকশন: পাশে ডটেড বর্ডার থাকবে শুধু বড় স্ক্রিনে */}
            <div className="md:border-l-2 md:border-dashed md:border-orange-400 md:p-8 space-y-2">
              <h3 className="text-xl font-bold text-[#004757]">
                100% Safe Delivery
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We ensure your parcels are handled with the utmost care and
                delivered securely to their destination. Our reliable process
                guarantees safe and damage-free delivery every time.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* ইমেজ সেকশন */}
            <div className="flex justify-center">
              <img
                src={safe_delivery}
                alt="Tracking"
                className="items-center object-contain"
              />
            </div>

            {/* টেক্সট সেকশন: পাশে ডটেড বর্ডার থাকবে শুধু বড় স্ক্রিনে */}
            <div className="md:border-l-2 md:border-dashed md:border-amber-600 md:p-8">
              <h3 className="text-xl font-bold text-secondary">
                24/7 Call Center Support
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our dedicated support team is available around the clock to
                assist you with any questions, updates, or delivery
                concerns—anytime you need us.
              </p>
            </div>
          </div>

        </div>
      </div>
      <MerchantBanner/>
    </div>
  );
};

export default Cares;
