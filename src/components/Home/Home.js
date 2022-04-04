import React from "react";
import Reviews from "../Reviews/Reviews";
// import useReviews from "../../hooks/useReviews";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-img-conatiner">
        <div className="text-container">
          <h1 className="headphone-title">Grab Your Favourite HEADPHONES🎧</h1>
          <p>
            Are you looking for a wireless earbud-type headset <br /> that
            delivers an impressive playback time? If your answer is yes, bring
            home the <br /> <strong>Beats By Dre</strong> <br /> that comes with
            a carrying case. This carrying case also acts as a 650 mAh portable
            charger that extends the playback time of these earbuds by up to 15
            hours
          </p>
          <button className="liveDemo-btn">Live Demo</button>
        </div>
        <div className="image-container">
          <img src="./Headphones-Transparent-PNG.png" alt="" />
        </div>
      </div>
      <div className="comments-container">
        <h1>Customer Review</h1>
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
