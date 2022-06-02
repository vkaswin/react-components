import React, { Fragment } from "react";

import "./Grid.scss";

const Grid = () => {
  return (
    <Fragment>
      <div>
        <h2 className="layout-title">Layout One</h2>
        <div className="grid-layout-one">
          <div className="one">
            <b>1</b>
          </div>
          <div className="two">
            <b>2</b>
          </div>
          <div className="three">
            <b>3</b>
          </div>
          <div className="four">
            <b>4</b>
          </div>
          <div className="five">
            <b>5</b>
          </div>
          <div className="six">
            <b>6</b>
          </div>
          <div className="seven">
            <b>7</b>
          </div>
        </div>
      </div>
      <div>
        <h2 className="layout-title">Layout Two</h2>
        <div className="grid-layout-two">
          <div className="one">
            <b>1</b>
          </div>
          <div className="two">
            <b>2</b>
          </div>
          <div className="three">
            <b>3</b>
          </div>
          <div className="four">
            <b>4</b>
          </div>
          <div className="five">
            <b>5</b>
          </div>
          <div className="six">
            <b>6</b>
          </div>
          <div className="seven">
            <b>7</b>
          </div>
          <div className="eight">
            <b>8</b>
          </div>
          <div className="nine">
            <b>9</b>
          </div>
          <div className="ten">
            <b>10</b>
          </div>
          <div className="eleven">
            <b>11</b>
          </div>
          <div className="twelve">
            <b>12</b>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Grid;
