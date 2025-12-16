// Card.js
import "../stylesheets/card.css";

export default function Card({ children, variant }) {
  return (
    <div className={`card-container${variant ? `-${variant}` : ""}`}>
      {children}
    </div>
  );
}
