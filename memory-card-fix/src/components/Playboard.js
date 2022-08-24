import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "../styles/Playboard.css";
import { Scoreboard } from "./Scoreboard";

export function Playboard(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [clicked, setClicked] = useState([]);
  const [cards, setCards] = useState([
    <Card name="A" key={1} handleCardClick={handleCardClick}></Card>,
    <Card name="B" key={2} handleCardClick={handleCardClick}></Card>,
    <Card name="C" key={3} handleCardClick={handleCardClick}></Card>,
    <Card name="D" key={4} handleCardClick={handleCardClick}></Card>,
    <Card name="E" key={5} handleCardClick={handleCardClick}></Card>,
    <Card name="F" key={6} handleCardClick={handleCardClick}></Card>,
  ]);

  const increment = () => {
    setScore((c) => c + 1);
  };

  function checkScore() {
    if (score > bestScore) {
      setBestScore(score);
    }
  }

  function handleStateChange(state) {
    setClicked(state);
  }

  useEffect(() => {
    setCards(shuffleArray(cards));
    handleStateChange();
  }, []);

  useEffect(() => {
    setCards(shuffleArray(cards));
    checkScore();
  }, [score]);

  function handleCardClick(e) {
    console.log(clicked);
    if (clicked.includes(e.target.querySelector("h1").textContent)) {
      console.log(clicked);
      resetGame();
    } else {
      increment();
      clicked.push(e.target.querySelector("h1").textContent);
      console.log(clicked);
    }
  }

  function resetGame() {
    setScore(0);
    setClicked([]);
    console.log(clicked);
  }

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      <div className="container">{cards}</div>
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
    </div>
  );
}
