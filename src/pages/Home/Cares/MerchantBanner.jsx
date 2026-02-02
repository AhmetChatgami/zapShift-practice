import React from 'react';
import location_merchant from '../../../assets/location-merchant.png'
import marchentBg from '../../../assets/be-a-merchant-bg.png'
const MerchantBanner = () => {
    return (
        <div className='mt-10 border-b-2 border-secondary border-dashed'>
            <section className="py-10">
      {/* মেইন কন্টেইনার: গাঢ় নীল ব্যাকগ্রাউন্ড */}
      <div className="bg-secondary md:rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
        
        {/* বাম পাশ: টেক্সট কন্টেন্ট */}
        <div className="w-full md:w-3/5 z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl mx-auto md:mx-0">
           We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
          </p>

          {/* বাটন গ্রুপ */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="bg-primary text-secondary font-bold px-8 py-4 rounded-full hover:bg-lime-500 transition w-full sm:w-auto">
              Become a Merchant
            </button>
            <button className="border-2 outline text-primary font-semibold px-8 py-4 rounded-full hover:bg-lime-500 hover:text-secondary transition w-full sm:w-auto">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* ডান পাশ: ইলাস্ট্রেশন ইমেজ */}
        <div className="w-full md:w-2/5 flex justify-center z-10">
          <img 
            src={location_merchant}
            alt="Satisfaction" 
            className="w-64 md:w-full object-contain"
          />
        </div>

        {/* ব্যাকগ্রাউন্ড অ্যাবস্ট্রাক্ট ডিজাইন (ঐ হালকা নীল লাইনগুলোর জন্য) */}
        <div className="absolute top-0 right-0 pointer-events-none">
           <img src={marchentBg} alt="" />
        </div>
      </div>
    </section>
        </div>
    );
};

export default MerchantBanner;