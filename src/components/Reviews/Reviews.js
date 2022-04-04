import React from "react";

const Reviews = ({ comment }) => {
  const { name } = comment;
  return (
    <div>
      <h3>This is Reviews.{name}</h3>
    </div>
  );
};

export default Reviews;
