import React from "react";
import { priceFormat, textFormat } from "../../../helpers/utils";

const Advertisement = ({
  url,
  mainImage,
  title,
  currencyCode,
  price,
  quantity,
}) => {
  const getLevelClassName = (quantity) => {
    if (quantity <= 10) {
      return "level-low";
    }

    if (quantity <= 20) {
      return "level-medium";
    }

    return "level-hight";
  };

  console.log(url, mainImage, price, title, currencyCode);

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={mainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{textFormat(title)}</p>
        <p className="item-price">{priceFormat(price, currencyCode)}</p>
        <p className={`item-quantity ${getLevelClassName(quantity)}`}>
          {quantity} left
        </p>
      </div>
    </div>
  );
};

export default Advertisement;
