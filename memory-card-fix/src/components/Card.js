import "../styles/Card.css";

export function Card({ name, handleCardClick }) {
  return <button onClick={() => handleCardClick(name)}>{name}</button>;
}
