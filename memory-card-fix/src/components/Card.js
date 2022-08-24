import { useState } from "react";
import "../styles/Card.css";

export function Card({ name, handleCardClick }) {
  return (
    <div className="card" {() => handleCardClick(name)}>
      <h1>{name}</h1>
    </div>
  );
}
