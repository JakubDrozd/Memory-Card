import { useState } from "react";

export function Card(props) {
  function handleClick() {
    props.onClick();
  }

  const [clicked, setClicked] = useState(false);

  const change = () => {
    if (clicked) {
      alert("You lose!");
    } else {
      setClicked(true);
    }
  };

  return <h1 onClick={handleClick}>{props.name}</h1>;
}
