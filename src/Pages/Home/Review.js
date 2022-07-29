import React from "react";

const Review = ({ review }) => {
  console.log(review);
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        {review?.review}
        <div className="flex items-center">
         
            <img
              src={review?.img}
              className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5"
              alt=""
            />

          <div>
            <h4 className="text-xl">{review?.name}</h4>
            <p>{review?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
