import React from "react";

function Card(props) {
  return (
    <div>
      <img
        src={props.image}
      />
      <h1>{props.name}</h1>
      <h2>{props.job}</h2>
      <h3>{props.home}</h3>
    </div>
  );
}

export default Card; 