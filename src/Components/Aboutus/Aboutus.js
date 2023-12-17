import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="inner-about">
        <div className="  text">
          <h3>about us</h3>
          <h4>We Leave A Delicious Memory For You</h4>
          <p>
            Klassy Cafe is one of the best restaurant HTML templates with
            Bootstrap v4.5.2 CSS framework. You can download and feel free to
            use this website template layout for your restaurant business. You
            are allowed to use this template for commercial purposes.
            <br />
            <br />
            You are NOT allowed to redistribute the template ZIP file on any
            template donwnload website. Please contact us for more information.
          </p>
          <div className="aboutss">
            <div className="innerss">
              <img
                src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/about-thumb-01.jpg"
                alt
              />
            </div>
            <div className="innerss">
              <img
                src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/about-thumb-02.jpg"
                alt
              />
            </div>
            <div className="innerss">
              <img
                src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/about-thumb-03.jpg"
                alt
              />
            </div>
          </div>
        </div>
        <div className="video ">
          <img
            src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/about-video-bg.jpg"
            alt
          />
          <div className="fas fa-play play" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
