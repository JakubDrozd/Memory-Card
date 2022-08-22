import { useState } from "react";

export function Card(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      alert("Wrong");
      props.resetScore();
    } else {
      console.log(props.score);
      setClicked(true);
      props.setScoreFunction(props.score);
      props.handleShuffle();
    }
  };

  return (
    <div className="card" onClick={handleClick} value={props.name}>
      <h1>{props.name}</h1>
    </div>
  );
}
