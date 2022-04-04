import React from "react";
import "./review.css";

const Review = (props) => {
  const { name, body, ratings } = props.review;
  return (
    <div className="review-container">
      <div>
        <h3>Customer Name: {name}</h3>
        <p>{body}</p>
        <h3>Ratings: {ratings}</h3>
      </div>
    </div>
  );
};

export default Review;
