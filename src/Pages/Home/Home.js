import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Review from './Review';
import Services from './Services';
import Testimonials from './Testimonials';
import Meassenger from './Meassenger';



const Home = () => {
    return (
      <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
        <Review></Review>
        <Contact></Contact>
       
        <Meassenger></Meassenger>
        <Footer></Footer>
      </div>
    );
};

export default Home;