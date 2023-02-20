import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img src={props.thumbnail} alt="" className="card-img" />
      <div className="text-area">
        <div className="ratingCountry">
          <p>⭐{props.rating}</p>
          <p>({props.stock})</p>
          <p>{props.discountPercentage}% OFF</p>
        </div>
        <p>{props.description}</p>
        <p className="brand">
          <strong>From ${props.price}</strong> / {props.brand}
        </p>
      </div>
    </div>
  );
};

export default Card;
