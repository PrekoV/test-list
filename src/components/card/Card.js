import React from "react";
import "./Card.scss";

export default function Card({ item }) {
  const imageUrlCreator = (id) => {
    return `https://images.jqestate.ru/${id}-jqestate-2048`;
  };

  const getPriceFormat = (price) => {
    return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
  };

  return (
    <div className="card border-0" style={{ width: "18rem" }}>
      <div className="image-wrapper">
        <img
          className="card-img-top"
          src={imageUrlCreator(item.images[0] && item.images[0].id)}
          alt=""
        />
      </div>
      <div className="card-body p-0 mb-4">
        <p className="card-text pt-2 m-0">
          <div className="shadow"></div>
          Дом в посёлке "{item.location.settlementName}",{" "}
          {item.location.mkadDistance} км, ID {item.id}
        </p>
        <h5 className="card-title p-0">
          <strong>
            {item.saleOffer
              ? getPriceFormat(item.saleOffer.multiCurrencyPrice.usd)
              : "No price yet"}
          </strong>
        </h5>
        <div className="d-flex">
          <div className="metric mx-3">{item.landDetails.area} сот</div>
          <div className="metric mx-3">
            {item.specification.area} м<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
}
