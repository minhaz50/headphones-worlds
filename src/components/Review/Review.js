import React from "react";

const Review = (props) => {
  const { name } = props.comment;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default Review;
