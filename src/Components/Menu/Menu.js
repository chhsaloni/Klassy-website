import React from "react";
import "./Menu.css";
import Data from "../../Utils/Data";
import CardComponents from "../CardComponents";
import Slider from "react-slick";

const Menu = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="our-menu">
      <div className="inner-menu">
        <h3 className="menuh3">our menu</h3>
        <h4>
          Our selection of cakes <br /> with quality taste
        </h4>

        <div className="card">
          <Slider {...settings}>
            {Data.map((item, index) => (
              <CardComponents
                key={index}
                id={item.id}
                imageUrl={item.imageUrl}
                price={item.price}
                dishname={item.dishname}
                description={item.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Menu;
