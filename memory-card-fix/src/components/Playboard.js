import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "../styles/Playboard.css";
import { Scoreboard } from "./Scoreboard";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

function initializeCards() {
  return shuffleArray(["A", "B", "C", "D", "E", "F"]);
}

export function Playboard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [cards, setCards] = useState(initializeCards);

  useEffect(() => {
    setBestScore((bestScore) => Math.max(bestScore, score));
  }, [score]);

  function handleCardClick(name) {
    if (clicked.includes(name)) {
      resetGame();
    } else {
      setScore((c) => c + 1);
      setClicked((c) => [...c, name]);
      setCards((cards) => shuffleArray(cards));
    }
  }

  function resetGame() {
    setScore(0);
    setClicked([]);
    setCards(initializeCards());
  }

  return (
    <div>
      <div className="container">
        {cards.map((name) => (
          <Card name={name} key={name} handleCardClick={handleCardClick}></Card>
        ))}
      </div>
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
    </div>
  );
}
