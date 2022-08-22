import { useState } from "react";
import "../styles/Card.css"

export function Card(props: any) {

  return (
    <div className="card" onClick={props.handleCardClick}>
      <h1>{props.name}</h1>
    </div>
  );
}