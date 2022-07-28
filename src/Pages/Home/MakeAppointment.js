import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
    return (
      <section style={{ background: `url(${appointment})` }} className="flex justify-center items-center">
        <div className="flex-1 hidden lg:block">
          <img src={doctor} className="mt-[-100px]" alt="Album" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-primary ">Appoinment </h3>
          <h2 className="text-3xl text-white">Make an Appoinment Today</h2>
          <p className='text-white'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
        </div>
      </section>
    );
};

export default MakeAppointment;
