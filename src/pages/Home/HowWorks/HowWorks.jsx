import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png'
const HowWorks = () => {
    return (
        <div className='my-20 p-6 mx-8'>
            <h2 className="text-2xl font-bold text-secondary">How it Works</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 text-secondary'>
                <section className='bg-white rounded-2xl p-6'>
                    <img src={bookingIcon} alt="" />
                    <h2 className='text-lg font-semibold'>Booking Pick & Drop</h2>
                    <p className='text-sm text-black'>From personal packages to business shipments - we deliver on time, evey time.</p>
                </section>
                <section className='bg-white rounded-2xl p-6'>
                    <img src={bookingIcon} alt="" />
                    <h2 className='text-lg font-semibold'>Cash On Delivery</h2>
                    <p className='text-sm text-black'>From personal packages to business shipments - we deliver on time, evey time.</p>
                </section>
                <section className='bg-white rounded-2xl p-6'>
                    <img src={bookingIcon} alt="" />
                    <h2 className='text-lg font-semibold'>Delivery Hub</h2>
                    <p className='text-sm text-black'>From personal packages to business shipments - we deliver on time, evey time.</p>
                </section>
                <section className='bg-white rounded-2xl p-6'>
                    <img src={bookingIcon} alt="" />
                    <h2 className='text-lg font-semibold'>Booking SME & Corporate</h2>
                    <p className='text-sm text-black'>From personal packages to business shipments - we deliver on time, evey time.</p>
                </section>
                
            </div>
        </div>
    );
};

export default HowWorks;