import React from 'react';
import service from '../../../assets/service.png'
const OurServices = () => {
    return (
          <div className=''>
             <div className='bg-secondary lg:rounded-2xl lg:p-8 my-20'>
                   <div className='pt-10'>
                    <header className='text-center'>
                    <h1 className='text-3xl font-bold text-white '>Our Services</h1>
                    <p className='text-white px-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
                    </header>
                </div>
                <section className='mt-6 lg:px-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-secondary p-4 lg:p-8'>
                   <div className='text-center bg-white p-6 rounded-2xl hover:bg-primary'>
                        <img src={service} className='bg-gray-100 p-5 rounded-full text-center mx-auto' alt="" />
                    <h2 className='text-xl font-semibold p-4'>Express & Standard Delivery</h2>
                    <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                   </div>
                   <div className='text-center bg-white p-6 rounded-2xl hover:bg-primary'>
                        <img src={service} className='bg-gray-100 p-5 rounded-full text-center mx-auto' alt="" />
                    <h2 className='text-xl font-semibold p-4'>Nationwide Delivery</h2>
                    <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                   </div>
                   <div className='text-center bg-white p-6 rounded-2xl hover:bg-primary'>
                        <img src={service} className='bg-gray-100 p-5 rounded-full text-center mx-auto' alt="" />
                    <h2 className='text-xl font-semibold p-4'>Fulfillment Solution</h2>
                    <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                   </div>
                   <div className='text-center bg-white p-6 rounded-2xl hover:bg-primary'>
                        <img src={service} className='bg-gray-100 p-5 rounded-full text-center mx-auto' alt="" />
                    <h2 className='text-xl font-semibold p-4'>Cash on Home Delivery</h2>
                    <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                   </div>
                   <div className='text-center bg-white p-6 rounded-2xl hover:bg-primary'>
                        <img src={service} className='bg-gray-100 p-5 rounded-full text-center mx-auto' alt="" />
                    <h2 className='text-xl font-semibold p-4'>Corporate Service / Contract In Logistics</h2>
                    <p>Customized corporate services which includes warehouse and inventory management support.</p>
                   </div>
                   <div className='text-center bg-white p-6 rounded-2xl hover:bg-primary'>
                        <img src={service} className='bg-gray-100 p-5 rounded-full text-center mx-auto' alt="" />
                    <h2 className='text-xl font-semibold p-4'>Parcel Return</h2>
                    <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                   </div>
                </section>
             </div>
            </div>
    
    );
};

export default OurServices;