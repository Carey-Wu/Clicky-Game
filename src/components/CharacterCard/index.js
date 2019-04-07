import React from "react";
import "./style.css";

function characterCard(props) {
  return (
    <div className="card" value={props.id} onClick={() => props.handleTileClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default characterCard;
