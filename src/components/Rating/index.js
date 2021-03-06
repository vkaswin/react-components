import React from "react";

import "./StarRating.scss";

export const Rating = ({
  rating = 0,
  color = "#faa500",
  onChange,
  size = "15",
  disabled = true,
}) => {
  const starFilled = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  );

  const starOutline = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
    </svg>
  );

  let star = Array(rating)
    .fill(starFilled)
    .concat(Array(5 - rating).fill(starOutline));

  const handleStar = (e, index) => {
    if (disabled) {
      return null;
    } else {
      onChange(index + 1);
    }
  };

  return (
    <div className="star-wrapper">
      {star.map((list, index) => {
        return (
          <div
            key={index}
            style={{ cursor: disabled ? "default" : "pointer" }}
            onMouseEnter={(e) => handleStar(e, index)}
          >
            {list}
          </div>
        );
      })}
    </div>
  );
};
