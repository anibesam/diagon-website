"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    "/images/protector.png",
    "/images/checker.png",
    "/images/protector.png",
    "/images/checker.png",
    "/images/checker.png",
  ];

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <img src={slide} alt="protector" className="pr-4" key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
