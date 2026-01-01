// WritingCard.js
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import "../../stylesheets/card.css";

export default function WritingCard({ slug, title, description, tags = [] }) {
  return (
    <Card variant="writing-card">
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-body">{description}</p>
      </div>

      {tags.length > 0 && (
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="card-footer">
        <Link to={`/blog/${slug}`} className="card-link"> Read More</Link>
      </div>
    </Card>
  );
}
