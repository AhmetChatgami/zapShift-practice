import React from "react";
import live_tracking from "../../../assets/live-tracking.png";
import safe_delivery from "../../../assets/safe-delivery.png";
const Cares = () => {
  return (
    <div>
      {/* <section className="hero-content grid-cols-1 lg:grid-cols-2">
        <div>
          

          <div className="flex items-center gap-8 bg-white p-6 rounded-xl">
            <img src={live_tracking} alt="" />
            <div className="border-l-2 border-dashed border-amber-600 p-8">
              <h2 className="text-xl font-semibold text-secondary">
                Live Parcel Tracking
              </h2>
              <p>
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      
        <div className="py-6">
          <div className="flex items-center gap-8 bg-white p-6 rounded-xl">
            <img src={safe_delivery} alt="" />
            <div className="border-l-2 border-dashed border-amber-600 p-8">
              <h2 className="text-xl font-semibold text-secondary">
                100% Safe Delivery
              </h2>
              <p>
                We ensure your parcels are handled with the utmost care and
                delivered securely to their destination. Our reliable process
                guarantees safe and damage-free delivery every time.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 bg-white p-6 rounded-xl">
          <img src={safe_delivery} alt="" />
          <div className="border-l-2 border-dashed border-amber-600 p-8">
            <h2 className="text-xl font-semibold text-secondary">
              24/7 Call Center Support
            </h2>
            <p>
              Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
            </p>
          </div>
        </div>
      </section> */}


      <div className="p-4 md:p-10">
      {/* মেইন কন্টেইনার: মোবাইলে ১টি কলাম (grid-cols-1), বড় স্ক্রিনে ২টি (lg:grid-cols-2) */}
      <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto">
        
        {/* একটি কার্ড শুরু */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* ইমেজ সেকশন */}
          <div className="flex justify-center">
            <img 
              src={live_tracking} 
              alt="Tracking" 
              className="w-40 md:w-full object-contain"
            />
          </div>

          {/* টেক্সট সেকশন: পাশে ডটেড বর্ডার থাকবে শুধু বড় স্ক্রিনে */}
          <div className="md:border-l-2 md:border-dotted md:border-orange-400 md:pl-6 space-y-2">
            <h3 className="text-xl font-bold text-[#004757]">Live Parcel Tracking</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Stay updated in real-time with our live parcel tracking feature. 
              From pick-up to delivery, monitor your shipment's journey.
            </p>
          </div>
        </div>
        {/* একটি কার্ড শেষ */}

        {/* একইভাবে আরও কার্ড যোগ করুন... */}

      </div>
    </div>
    </div>
  );
};

export default Cares;
