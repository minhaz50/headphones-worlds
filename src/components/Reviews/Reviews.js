import React from "react";
import useComments from "../../hooks/useComments";
import Review from "../Review/Review";

const Reviews = () => {
  const [comments, setComments] = useComments;
  return (
    <div>
      {comments.map((comment) => (
        <Review comment={comment}></Review>
      ))}
    </div>
  );
};

export default Reviews;
