import React from "react";
import Advertisement from "./advertisement";

const Listing = ({ advertisements }) => {
  const jsonToAdvertisement = (item) => ({
    url: item.url,
    title: item.title,
    mainImage: item.MainImage,
    currencyCode: item.currency_code,
    price: item.price,
    quantity: item.quantity,
  });

  return (
    <div className="item-list">
      {advertisements
        .filter(({ state }) => state !== "removed")
        .map((item) => (
          <Advertisement key={item.listing_id} {...jsonToAdvertisement(item)} />
        ))}
    </div>
  );
};

export default Listing;
