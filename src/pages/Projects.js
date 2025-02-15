import Card from "../components/Card";
import project from "../data/projects.json";

export default function Projects() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="content">
                    <div className="project-experience">
                        <h2>Selected Projects</h2>
                        <p>More to be published soon...</p>
                        <div className="card-grid">
                            {project.map((work, index) => (
                                <Card
                                    key={index}
                                    title={work.title}
                                    body={work.description}
                                    link={work.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}