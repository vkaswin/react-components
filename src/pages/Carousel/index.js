import React from "react";
import { Carousel } from "components";

import carouselOne from "assets/images/carousel/carousel-1.jpg";
import carouselTwo from "assets/images/carousel/carousel-2.jpg";
import carouselThree from "assets/images/carousel/carousel-3.jpg";
import carouselFour from "assets/images/carousel/carousel-4.jpg";

import "./Carousel.scss";

const CarouselPage = () => {
  const images = [carouselOne, carouselTwo, carouselThree, carouselFour];

  return (
    <div className="carousel-box">
      <Carousel>
        {images.map((list, index) => {
          return (
            <img
              key={index}
              src={list}
              className="carousel-img"
              draggable={false}
              alt=""
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
