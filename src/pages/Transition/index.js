import React, { useEffect, useState } from "react";
import { getProductList } from "service/Api";

import "./Transition.scss";

const TransitionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productList();
  }, []);

  const options = { root: null, rootMargin: "0px", threshold: 0.5 };

  useEffect(() => {
    const ele = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((event) => {
      event.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("active");
        e.target.addEventListener(
          "animationend",
          () => e.target.setAttribute("class", ""),
          { once: true }
        );
      });
    }, options);

    ele.forEach((e) => {
      observer.observe(e);
    });
  });

  const productList = async () => {
    try {
      let { data } = await getProductList();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {products.map(({ image }, index) => {
        return (
          <div key={index} className="reveal">
            <img src={image} className="product-img" />
          </div>
        );
      })}
    </div>
  );
};

export default TransitionPage;
