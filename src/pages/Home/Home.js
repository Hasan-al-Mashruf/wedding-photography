import React from 'react';
import Banner from '../../sections/Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service size={3} />
        </div>
    );
};

export default Home;