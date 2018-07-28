import React from "react";
import "./ParkCard.css";

const ParkCard = props => (
  <div className="ParkCard" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ParkCard;