import React from "react";
import "./FlexCard.css";
import Card from "../Card/Card";
import data from "./data";

const FlexCard = () => {
  const products = data.map((item) => (
    <Card
      key={item.id}
      {...item}
    />
  ));
  return <div className="FlexCard">{products}</div>;
};

export default FlexCard;
