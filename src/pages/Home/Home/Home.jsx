import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="div">
                <HowWorks/>
            </div>
            <div>
                <OurServices/>
            </div>
        </div>
    );
};

export default Home;