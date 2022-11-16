import React from 'react';
import Banner from '../../sections/Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Photographer from '../Photographer/Photographer';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service size={3} />
            <ContactUs></ContactUs>
            <Photographer></Photographer>
        </div>
    );
};

export default Home;