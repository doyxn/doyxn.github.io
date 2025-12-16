// ProjectCard.js
import Card from "../../components/Card";
import "../../stylesheets/card.css";
import githubIcon from "../../images/icons/github-square.svg";

export default function ProjectCard({ title, body, link, tags = [] }) {
  return (
    <Card variant="project-card">
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-body">{body}</p>
      </div>

      {tags.length > 0 && (
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="card-footer">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View More
        </a>
      </div>
    </Card>
  );
}
