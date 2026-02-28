import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='flex items-center'>
                <Logo></Logo><p className='text-xl font-semibold -mx-2'>ZapShift</p>
                
                </h1>
            <div className='flex items-center '>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;