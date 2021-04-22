import React from "react";
import "./item.css";

export default function item(props) {
  return (
    <div className="item-style">
      <h3>{props.item.name}</h3>
      <h3>{props.item.calories}</h3>
      <button name={props.item.name}className="remove-button" onClick={props.onClick}>Remove</button>
      <h3></h3>
    </div>
  );
}
