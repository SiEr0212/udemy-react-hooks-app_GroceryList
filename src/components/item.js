import React from "react";
import "./item.css";

export default function item({ item }) {
  return (
    <div className="item-style">
      <h3>{item.name}</h3>
      <h3>{item.calories}</h3>
      <button className="remove-button">Remove</button>
      <h3></h3>
    </div>
  );
}
