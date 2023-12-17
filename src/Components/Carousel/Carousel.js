import React from "react";
import "./Carousel.css";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="klassycafe">
      <div className="cafe">
        <div className="innercafe">
          <h1>Klassycafe</h1>
          <h2>The Best Experience</h2>
          <br />
          <br />
          <button>Make a Reservation</button>
        </div>
      </div>
      <div className="image">
        <Slider {...settings}>
          <div>
            <img
              className="auto"
              src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/slide-02.jpg"
              alt
            />
          </div>
          <div>
            <img
              className="auto"
              src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/slide-01.jpg"
              alt
            />
          </div>
          <div>
            <img
              className="auto"
              src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/slide-03.jpg"
              alt
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
