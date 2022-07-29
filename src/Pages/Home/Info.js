import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <InfoCard
          cardTitle="Opening Hours"
          bgClass="bg-primary"
          img={clock}
        ></InfoCard>
        <InfoCard
          cardTitle="Our Location"
          bgClass=" bg-accent "
          img={marker}
        ></InfoCard>
        <InfoCard
          cardTitle="Contacts Us"
          bgClass="bg-gradient-to-r from-lime-300 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          img={phone}
        ></InfoCard>
      </div>
    );
};

export default Info;