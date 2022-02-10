import React from "react";
import Slider from "react-slick";

import "./_style.scss";

export default function CarouselPelis({ isShow, children, ...props }) {
  const settings = {
    arrows: true,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  if (!isShow) return null;

  return (
    <Slider {...settings} className="carousel__pelis">
      {children}
    </Slider>
  );
}
