import { useState } from "react";

export function Card(props) {
  const [clicked, setClicked] = useState(false);

  const used = [];

  const handleClick = (e) => {
    if (clicked) {
      alert("You lose!");
      props.resetScore();
    } else {
      setClicked(true);
      props.setScoreFunction();
    }
  };

  return (
    <div className="card" onClick={handleClick} value={props.name}>
      <h1>{props.name}</h1>
    </div>
  );
}
