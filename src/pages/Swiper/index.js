import React from "react";
import { Swiper } from "components";

import image from "assets/images/swiper/img.webp";

import "./Swiper.scss";

const swiper = [
  {
    img: image,
    name: "John Doe",
    designation: "Web Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: image,
    name: "John Doe",
    designation: "Backend Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    img: image,
    name: "John Doe",
    designation: "Phython Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: image,
    name: "John Doe",
    designation: "Web Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: image,
    name: "John Doe",
    designation: "Backend Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    img: image,
    name: "John Doe",
    designation: "Phython Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: image,
    name: "John Doe",
    designation: "Web Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: image,
    name: "John Doe",
    designation: "Backend Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    img: image,
    name: "John Doe",
    designation: "Phython Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const SwiperPage = () => {
  return (
    <div className="mt-4">
      <Swiper>
        {swiper.map(({ img, name, designation, about }, index) => {
          return (
            <Swiper.Slide key={index} className="swiper-card">
              <div className="profile-section">
                <img src={img} />
                <div className="social-icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-github"></i>
                </div>
              </div>
              <div className="about-section">
                <b>{name}</b>
                <span>{designation}</span>
                <p>{about}</p>
                <button>View More</button>
              </div>
            </Swiper.Slide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperPage;
