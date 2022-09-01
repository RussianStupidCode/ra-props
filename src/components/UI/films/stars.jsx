import React from "react";
import Star from "./star";

const Stars = ({ count }) => {
  const parseCount = parseInt(String(count));

  if (isNaN(parseCount) || parseCount < 1 || parseCount > 5) {
    return null;
  }

  return (
    <ul className="card-body-stars">
      {new Array(parseCount).fill(0).map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
