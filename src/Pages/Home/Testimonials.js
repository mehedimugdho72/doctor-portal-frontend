import React from 'react';
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";


const Testimonials = () => {
    const reviews = [
      {
        _id: "1",
        name: "Winson Herry",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quo libero deleniti deserunt adipisci! Nostrum commodi inventore iusto natus sint, reiciendis accusantium itaque maxime, repudiandae culpa nesciunt at blanditiis fuga?",
        location: "California",
        img: people1,
      },
      {
        _id: "2",
        name: "David Millar",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quo libero deleniti deserunt adipisci! Nostrum commodi inventore iusto natus sint, reiciendis accusantium itaque maxime, repudiandae culpa nesciunt at blanditiis fuga?",
        location: "Las Vegas",
        img: people2,
      },
      {
        _id: "3",
        name: "AB DE Villiars",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quo libero deleniti deserunt adipisci! Nostrum commodi inventore iusto natus sint, reiciendis accusantium itaque maxime, repudiandae culpa nesciunt at blanditiis fuga?",
        location: "Washington DC",
        img: people3,
      },
    ];
    return (

      <section className='my-28'>
        <div className='flex justify-between '>
          <div>
            <h4 className="text-xl text-primary font-bold">Testimonials</h4>
            <h2 className="text-3xl">What Our Patients Says</h2>
          </div>
          <div>
            <img src={quote} className='w-24 lg:w-48' alt="" />
          </div>
        </div>

        <div>
          <div></div>
        </div>
      </section>
    );
};

export default Testimonials;