import React, { Fragment, useEffect, useState } from "react";
import { getAllProducts } from "service/Api";
import { toast } from "utils";
import { Rating } from "components";

import "./LazyLoad.scss";

const LazyLoad = () => {
  const [products, setProducts] = useState([]);

  const options = { root: null, rootMargin: "-70px", threshold: 1 };

  useEffect(() => {
    if (products.length === 0) return;

    const images = document.querySelectorAll("[data-src]");

    let imgObserver = new IntersectionObserver((event) => {
      event.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.src = target.getAttribute("data-src");
          imgObserver.unobserve(target);
        }
      });
    }, options);

    if (images.length !== 0) {
      images.forEach((img) => imgObserver.observe(img));
    }

    return () => {
      if (images.length !== 0) {
        images.forEach((img) => imgObserver.unobserve(img));
      }
    };
  }, [products]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let {
        data: { products },
      } = await getAllProducts();
      setProducts(products);
    } catch (error) {
      toast({ type: "error", message: error.message });
    }
  };

  if (products.length === 0) return null;

  return (
    <Fragment>
      <div className="product-wrapper">
        {products.map(
          ({ title, description, price, thumbnail, rating }, index) => {
            return (
              <div className="product-card" key={index}>
                <div className="product-info">
                  <div className="product-img">
                    <img data-src={thumbnail} />
                  </div>
                  <div className="rating">
                    <Rating
                      rating={+rating.toFixed(0)}
                      color="#fa9f43"
                      size="15"
                    />
                    <b>
                      {Number(price).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </b>
                  </div>
                  <div className="product-title">
                    <b>{title}</b>
                    <span>{description}</span>
                  </div>
                </div>
                <div className="product-btn">
                  <button className="wishlist-btn">
                    <i className="far fa-heart"></i> Wishlist
                  </button>
                  <button className="cart-btn">
                    <i className="fas fa-shopping-cart"></i> View In Cart
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </Fragment>
  );
};

export default LazyLoad;
