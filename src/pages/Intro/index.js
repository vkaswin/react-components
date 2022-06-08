import React, { Fragment, useState } from "react";
import { Intro } from "components";

import "./Intro.scss";

const IntroPage = () => {
  const steps = [
    {
      selector: "[data-intro-one]",
      position: "right-center",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      selector: "[data-intro-two]",
      position: "left-start",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      selector: "[data-intro-three]",
      position: "bottom-end",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      selector: "[data-intro-four]",
      position: "top-center",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      selector: "[data-intro-five]",
      position: "top-center",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      selector: "[data-intro-six]",
      position: "top-center",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      selector: "[data-intro-seven]",
      position: "top-start",
      children:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
  };

  return (
    <Fragment>
      <button className="btn btn-primary intro-start" onClick={toggle}>
        Start
      </button>
      <h1 className="text-center" data-intro-one>
        Houses For Sale
      </h1>
      <div className="intro-card-grid">
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/178j8tJrNlc" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/eWqOgJ-lfiI" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image" data-intro-three>
            <img src="https://source.unsplash.com/178j8tJrNlc" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/eWqOgJ-lfiI" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/178j8tJrNlc" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/eWqOgJ-lfiI" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image" data-intro-six>
            <img src="https://source.unsplash.com/178j8tJrNlc" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow" data-intro-two>
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/eWqOgJ-lfiI" />
          </div>
          <div className="intro-card-body">
            <span data-intro-seven>Lorem ipsum</span> dolor sit amet consectetur
            adipisicing elit. Nesciunt expedita nulla nobis cumque quisquam.
            Enim perspiciatis vero laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary" data-intro-four>
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/178j8tJrNlc" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/eWqOgJ-lfiI" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/178j8tJrNlc" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary">Details</button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="intro-card intro-card-shadow">
          <div className="intro-card-header intro-card-image">
            <img src="https://source.unsplash.com/eWqOgJ-lfiI" />
          </div>
          <div className="intro-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita nulla nobis cumque quisquam. Enim perspiciatis vero
            laudantium nemo cum!
          </div>
          <div className="intro-card-footer">
            <button className="btn btn-secondary" data-intro-five>
              Details
            </button>
            <button className="btn btn-outline-secondary">
              Contact Seller
            </button>
          </div>
        </div>
      </div>

      <Intro steps={steps} enabled={enabled} onComplete={toggle} />
    </Fragment>
  );
};

export default IntroPage;
