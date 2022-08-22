import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "../styles/Playboard.css";
import { Scoreboard } from "./Scoreboard";

export function Playboard(props) {
  const [score, setScore] = useState(0);

  const [clicked, setClicked] = useState([]);

  const increment = () => {
    setScore((c) => c + 1);
  };

  useEffect(() => {
    setCards(shuffleArray(cards));
  }, []);

  useEffect(() => {
    setCards(shuffleArray(cards));
  }, [score]);

  async function handleCardClick(e) {
    if (clicked.includes(e.target.querySelector("h1").textContent)) {
      setClicked([]);
      setScore(0);
    } else {
      increment();
      clicked.push(e.target.querySelector("h1").textContent);
    }
  }

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState([
    <Card name="A" key={1} handleCardClick={handleCardClick}></Card>,
    <Card name="B" key={2} handleCardClick={handleCardClick}></Card>,
    <Card name="C" key={3} handleCardClick={handleCardClick}></Card>,
    <Card name="D" key={4} handleCardClick={handleCardClick}></Card>,
    <Card name="E" key={5} handleCardClick={handleCardClick}></Card>,
    <Card name="F" key={6} handleCardClick={handleCardClick}></Card>,
  ]);

  return (
    <div>
      <div className="container">{cards}</div>
      <Scoreboard score={score}></Scoreboard>
      <button onClick={() => console.log(clicked)}>Check array</button>
    </div>
  );
}
